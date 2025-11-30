import User from '../models/User.js';
import { sendVerificationEmail, sendPasswordResetEmail } from '../services/email.service.js';

export const register = async (request, reply) => {
  try {
    const { firstName, lastName, email, phone, password } = request.body;

    // Validação básica
    if (!firstName || !lastName || !email || !phone || !password) {
      return reply.status(400).send({
        success: false,
        error: 'All fields are required'
      });
    }

    // Validar senha (mínimo 8 caracteres, número e caractere especial)
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      return reply.status(400).send({
        success: false,
        error: 'Password must be at least 8 characters with a number and special character'
      });
    }

    // Verificar se usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return reply.status(409).send({
        success: false,
        error: 'Email already registered'
      });
    }

    // Criar usuário
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password
    });

    // Gerar código de verificação
    const verificationCode = user.generateVerificationCode();
    await user.save();

    // Enviar email de verificação
    await sendVerificationEmail(email, verificationCode, firstName);

    return reply.status(201).send({
      success: true,
      message: 'User registered successfully. Please check your email for verification code.',
      data: {
        email: user.email,
        requiresVerification: true
      }
    });

  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: 'Error registering user'
    });
  }
};

export const login = async (request, reply) => {
  try {
    const { email, password, rememberMe } = request.body;

    if (!email || !password) {
      return reply.status(400).send({
        success: false,
        error: 'Email and password are required'
      });
    }

    // Buscar usuário com senha
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return reply.status(401).send({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Verificar senha
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return reply.status(401).send({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Se não verificado, enviar novo código
    if (!user.isVerified) {
      const verificationCode = user.generateVerificationCode();
      await user.save();
      await sendVerificationEmail(email, verificationCode, user.firstName);

      return reply.status(403).send({
        success: false,
        error: 'Please verify your email first',
        requiresVerification: true
      });
    }

    // Gerar código 2FA
    const twoFactorCode = user.generateVerificationCode();

    // Salvar informação de remember me
    if (rememberMe) {
      user.rememberMeDays = 14;
    } else {
      user.rememberMeDays = 0;
    }

    user.lastLogin = new Date();
    await user.save();

    // Enviar código 2FA por email
    await sendVerificationEmail(email, twoFactorCode, user.firstName);

    return reply.send({
      success: true,
      message: 'Verification code sent to your email',
      data: {
        email: user.email,
        requires2FA: true
      }
    });

  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: 'Error during login'
    });
  }
};

export const verifyCode = async (request, reply) => {
  try {
    const { email, code } = request.body;

    if (!email || !code) {
      return reply.status(400).send({
        success: false,
        error: 'Email and code are required'
      });
    }

    const user = await User.findOne({ email })
      .select('+verificationCode +verificationCodeExpires');

    if (!user) {
      return reply.status(404).send({
        success: false,
        error: 'User not found'
      });
    }

    // Verificar código e expiração
    if (user.verificationCode !== code) {
      return reply.status(400).send({
        success: false,
        error: 'Invalid verification code'
      });
    }

    if (user.verificationCodeExpires < new Date()) {
      return reply.status(400).send({
        success: false,
        error: 'Verification code expired'
      });
    }

    // Marcar como verificado e limpar código
    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpires = undefined;
    await user.save();

    // Gerar JWT token
    const expiresIn = user.rememberMeDays > 0
      ? `${user.rememberMeDays}d`
      : '24h';

    const token = await reply.jwtSign(
      { userId: user._id, email: user.email },
      { expiresIn }
    );

    return reply.send({
      success: true,
      message: 'Email verified successfully',
      data: {
        token,
        user: user.toPublicJSON()
      }
    });

  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: 'Error verifying code'
    });
  }
};

export const forgotPassword = async (request, reply) => {
  try {
    const { email } = request.body;

    if (!email) {
      return reply.status(400).send({
        success: false,
        error: 'Email is required'
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      // Por segurança, não revelar se o email existe
      return reply.send({
        success: true,
        message: 'If email exists, a reset link will be sent'
      });
    }

    const resetToken = user.generateResetToken();
    await user.save();

    await sendPasswordResetEmail(email, resetToken, user.firstName);

    return reply.send({
      success: true,
      message: 'Password reset instructions sent to your email'
    });

  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: 'Error processing request'
    });
  }
};

export const resetPassword = async (request, reply) => {
  try {
    const { token, newPassword } = request.body;

    if (!token || !newPassword) {
      return reply.status(400).send({
        success: false,
        error: 'Token and new password are required'
      });
    }

    // Validar senha
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      return reply.status(400).send({
        success: false,
        error: 'Password must be at least 8 characters with a number and special character'
      });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    }).select('+resetPasswordToken +resetPasswordExpires');

    if (!user) {
      return reply.status(400).send({
        success: false,
        error: 'Invalid or expired reset token'
      });
    }

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return reply.send({
      success: true,
      message: 'Password reset successfully'
    });

  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: 'Error resetting password'
    });
  }
};

export const getProfile = async (request, reply) => {
  try {
    const userId = request.user.userId;

    const user = await User.findById(userId);
    if (!user) {
      return reply.status(404).send({
        success: false,
        error: 'User not found'
      });
    }

    return reply.send({
      success: true,
      data: user.toPublicJSON()
    });

  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: 'Error fetching profile'
    });
  }
};

export const resendCode = async (request, reply) => {
  try {
    const { email } = request.body;

    if (!email) {
      return reply.status(400).send({
        success: false,
        error: 'Email is required'
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return reply.status(404).send({
        success: false,
        error: 'User not found'
      });
    }

    const verificationCode = user.generateVerificationCode();
    await user.save();

    await sendVerificationEmail(email, verificationCode, user.firstName);

    return reply.send({
      success: true,
      message: 'Verification code sent successfully'
    });

  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({
      success: false,
      error: 'Error resending code'
    });
  }
};
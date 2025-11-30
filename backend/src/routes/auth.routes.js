// src/routes/auth.routes.js
import {
  register,
  login,
  verifyCode,
  forgotPassword,
  resetPassword,
  getProfile,
  resendCode
} from '../controllers/auth.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

async function authRoutes(fastify, options) {
  // Rotas públicas
  fastify.post('/register', register);
  fastify.post('/login', login);
  fastify.post('/verify', verifyCode);
  fastify.post('/forgot-password', forgotPassword);
  fastify.post('/reset-password', resetPassword);
  fastify.post('/resend-code', resendCode);

  // Rotas protegidas (requerem autenticação)
  fastify.get('/profile', { preHandler: authenticate }, getProfile);
}

export default authRoutes;
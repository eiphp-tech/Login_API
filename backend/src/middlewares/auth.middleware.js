
export const authenticate = async (request, reply) => {
  try {
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return reply.status(401).send({
        success: false,
        error: 'No token provided'
      });
    }

    const decoded = await request.jwtVerify();
    request.user = decoded;

  } catch (error) {
    return reply.status(401).send({
      success: false,
      error: 'Invalid or expired token'
    });
  }
};
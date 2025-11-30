// src/server.js
import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import multipart from '@fastify/multipart';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const fastify = Fastify({
  logger: {
    level: process.env.NODE_ENV === 'development' ? 'info' : 'error'
  }
});

// Plugins
await fastify.register(cors, {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
});

await fastify.register(jwt, {
  secret: process.env.JWT_SECRET || 'change-this-secret-key'
});

await fastify.register(multipart);

// Health check
fastify.get('/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Routes
fastify.register(authRoutes, { prefix: '/api/auth' });

// Error handler
fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);

  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  reply.status(statusCode).send({
    success: false,
    error: message,
    statusCode
  });
});

// Start server
const start = async () => {
  try {
    await connectDatabase();

    const port = process.env.PORT || 3333;
    await fastify.listen({ port, host: '0.0.0.0' });

    console.log(`🚀 Server running on http://localhost:${port}`);
    console.log(`📚 Health check: http://localhost:${port}/health`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
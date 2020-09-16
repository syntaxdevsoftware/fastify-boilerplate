import { FastifyReply, FastifyRequest } from "fastify";

export const get = async (_req: FastifyRequest, reply: FastifyReply) => {
  reply.send("some-text");
};

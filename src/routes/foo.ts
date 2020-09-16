import { FastifyInstance } from "fastify";

import * as controller from "../controllers/foo";

export default async (fastify: FastifyInstance) => {
  fastify.get("/", controller.get);
};

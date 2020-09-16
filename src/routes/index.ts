import { resolve } from "path";
import { FastifyInstance } from "fastify";
import serveStatic from "fastify-static";

import foo from "./foo";

export default async (fastify: FastifyInstance) => {
  // static files (images and stuff)
  fastify.register(serveStatic, {
    root: resolve(__dirname, "../public"),
    prefix: "/assets",
  });

  // health check
  fastify.register(
    (f) => f.get("/health-check", async (_r, res) => res.code(200).send("OK")),
    { prefix: "/" },
  );

  fastify.register(foo, { prefix: "/api/v1/foo" });
};

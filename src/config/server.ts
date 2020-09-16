import fastify from "fastify";
import helmet from "fastify-helmet";
import cors from "fastify-cors";

import routes from "@routes";

const corsConfig = () => {
  if (process.env.NODE_ENV === "production") {
    // TODO: define on project by project basis
    return false;
  }

  return "*";
};

export default async () => {
  const server = fastify({
    logger: process.env.NODE_ENV === "production",
  });

  const { SERVER_HOST, SERVER_PORT } = process.env;

  server.register(helmet);
  server.register(cors, {
    methods: ["get", "post", "put", "delete", "options"],
    origin: corsConfig(),
    optionsSuccessStatus: 200,
  });

  server.register(routes);

  return server.listen(Number(SERVER_PORT), SERVER_HOST);
};

// import "module-alias/register";
require("module-alias/register");

import { config as dotenv } from "dotenv";

dotenv();

import createServer from "./config/server";

createServer()
  .then((url) => console.log(`Server running on ${url}`))
  .catch((err) => console.error("server gave up", err));

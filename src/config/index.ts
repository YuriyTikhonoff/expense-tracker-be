const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const { DEFAULT_PORT } = require("../constants");

const config = {
  port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : DEFAULT_PORT,
};

console.log("process.env.PORT", process.env.PORT);

export = { config };

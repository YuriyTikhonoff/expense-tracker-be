const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const constants = require("../constants");

const config = {
  port: process.env.PORT || constants.DEFAULT_PORT,
};

console.log("process.env.PORT", process.env.PORT);

export = { config };

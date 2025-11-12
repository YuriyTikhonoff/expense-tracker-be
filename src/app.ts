const express = require("express");
const db = require("./database/connection");
const { config } = require("./config");
const app = express();
const PORT = config.port;

app.get("/", (_req: unknown, res: unknown) => {
  (res as { send: (arg: string) => void }).send("Hello World!----");
});

const startServer = async () => {
  try {
    await db.connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

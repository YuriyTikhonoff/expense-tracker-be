const express = require("express");
const { expensesRouter } = require("./features/expenses/route");
const db = require("./database/connection");
const { config } = require("./config");
import type { Request, Response } from "express";

const app = express();
const PORT = config.port;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!----");
});
app.use("/expenses", expensesRouter);
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
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

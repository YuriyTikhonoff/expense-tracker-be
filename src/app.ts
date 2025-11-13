const express = require("express");
const { expensesRouter } = require("./features/expenses/route");
const db = require("./database/connection");
const { config } = require("./config");
const app = express();
const PORT = config.port;

app.get("/", (_req: unknown, res: unknown) => {
  (res as { send: (arg: string) => void }).send("Hello World!----");
});
app.use("/expenses", expensesRouter);
app.get("/health", (_req: unknown, res: unknown) => {
  (res as { status: (code: number) => { json: (arg: object) => void } })
    .status(200)
    .json({ status: "ok" });
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

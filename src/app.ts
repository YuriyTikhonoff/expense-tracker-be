const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (_req: unknown, res: unknown) => {
  (res as { send: (arg: string) => void }).send("Hello World!@@@@@");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

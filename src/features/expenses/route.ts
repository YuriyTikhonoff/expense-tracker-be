const { ExpenseController } = require("./controller");
const { Router } = require("express");

const expensesRouter = Router();
// Define your expense-related routes here
expensesRouter.get("/", ExpenseController.getExpenses);

export = { expensesRouter };

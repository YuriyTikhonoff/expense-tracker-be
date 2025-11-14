import type { Request, Response } from "express";
class ExpenseController {
  async getExpenses(_req: Request, res: Response) {
    res.send("List of expenses");
  }
}

export = { ExpenseController: new ExpenseController() };

class ExpenseController {
  async getExpenses(_req: unknown, res: unknown) {
    (res as { send: (arg: string) => void }).send("List of expenses");
  }
}

export = { ExpenseController: new ExpenseController() };

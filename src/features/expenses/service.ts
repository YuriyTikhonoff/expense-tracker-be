const { ExpensesModel } = require("./model");

class ExpensesService {
  async listExpenses() {
    return ExpensesModel.fetchAll();
  }
}

export = { ExpensesService: new ExpensesService() };

const { ExpensesModel } = require("./model");

class ExpensesService {
  async listExpenses() {
    return await ExpensesModel.fetchAll();
  }
}

export = { ExpensesService: new ExpensesService() };

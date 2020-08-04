const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const getByPeriod = async (period) => {
  const periodList = await TransactionModel.find(
    {
      yearMonth: period,
    },
    {
      _id: 1,
      description: 1,
      value: 1,
      category: 1,
      year: 1,
      month: 1,
      day: 1,
      yearMonth: 1,
      yearMonthDay: 1,
      type: 1,
    }
  ).sort({day: 1});
  return periodList;
};

const getAllPeriod = async () => {
  const periodList = await TransactionModel.find({});
  return periodList;
};

module.exports = { getByPeriod, getAllPeriod };

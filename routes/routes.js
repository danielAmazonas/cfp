const express = require('express');
const transactionRouter = express.Router();
const {
  getByPeriod,
  getAllPeriod,
} = require('../services/transactionService.js');

function compare(period) {
  return /([12]\d{3}-(0[1-9]|1[0-2]))/.test(period);
}

transactionRouter.get('/', async (req, res) => {
  try {
    const period = req.query.period;
    if (period !== 'all') {
      const data = await getByPeriod(period);
      compare(period) && period.length === 7
        ? res.status(200).send(data)
        : res.status(400).send({
            error:
              'É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm',
          });
    } else {
      const data = await getAllPeriod();
      console.log(data);
      res.status(200).send(data);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = transactionRouter;

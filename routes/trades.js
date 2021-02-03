const express = require('express');
const router = express.Router();
const TradesController = require('../controllers/trades')

router.get('/', TradesController.trades_get_all)

router.post('/', TradesController.trades_create_trade)

router.get('/:tradeId', TradesController.trades_get_trade)

router.delete('/', TradesController.default_response)

router.put('/', TradesController.default_response)

router.patch('/', TradesController.default_response)

module.exports = router;

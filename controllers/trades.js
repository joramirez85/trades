const mongoose = require('mongoose')

const Trade = require('../models/trades')

const trades_get_all = async (req, res, next) => {
  try {
    const query = req.query
    let trades
    if (query) {
      trades = await Trade.find(query)  
    } else {
      trades = await Trade.find({})
    }
    res.status(200).json({
      trades,
      method: 'GET',
      message: 'get all trades'
    })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const trades_create_trade = async (req, res, next) => {
  try {
    const trade = new Trade({
      _id: new mongoose.Types.ObjectId(),
      type: req.body.type,
      user_id: req.body.user_id,
      symbol: req.body.symbol,
      shares: req.body.shares,
      price: req.body.price
    })
    const savedData = await trade.save()
    res.status(201).json({
      method: 'POST',
      message: 'create trade',
      savedData
    })
  } catch (error) {
    res.status(500).json({
      message: `There was an error. Details: ${error}`
    })
  }
}

const trades_get_trade = async (req, res, next) => {
  try {
    const { tradeId } = req.params
    const trade = await Trade.findById(tradeId)
    if (!trade) {
      res.status(404).json({
        message: 'ID not found'
      })
    }
    res.status(200).json({
      method: 'GET',
      message: 'get trade by id',
      tradeId,
      trade
    })
  } catch (error) {
    res.status(500).json({
      message: `There was an error. Details: ${error}`
    })
  }
}

const default_response = async (req, res, next) => {
  res.status(405).json({
    message: 'API does not allow deleting or modifying trades for any id value',
  })
}

module.exports = {
  trades_get_all,
  trades_create_trade,
  trades_get_trade,
  default_response
}

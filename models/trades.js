// Uncomment the code below to use Sequelize ORM
// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
const mongoose = require('mongoose');


// Insert your model definition below
const tradeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: {type: String, required: true},
  user_id: { type: Number},
  symbol: {type: String, required: true},
  shares: { type: Number},
  price: {type: Number, required: true},
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Trade', tradeSchema)

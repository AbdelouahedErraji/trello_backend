const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  Desc: {
    type: String,
    require: true,
  },
  descData: {
    type: String,
    require: true,
  },
  DataLastActivity: {
    type: String,
    require: true,
  },
  pos: {
    type: String,
    require: true,
  },
  Attachement: {
    type: String,
    require: true,
  },
  adresse: {
    type: String,
    require: true,
  },
  closed: {
    type: Boolean,
  },
  subscribed: {
    type: Boolean,
  },
  due: {
    type: Date,
  },
  dueComlet: {
    type: Boolean,
  },
 
}, {timestamps: true});

module.exports = mongoose.model('List', cardSchema);
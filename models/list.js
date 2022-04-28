const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  closed: {
    type: Boolean,
  },
  pos: {
    type: String,
    require: true,
  },
  subscribed: {
    type: Boolean,
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
 
}, {timestamps: true});

module.exports = mongoose.model('List', listSchema);
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  descData: {
    type: String,
    require: true,
  },
  closed: {
    type: Boolean,
  },
  pinned: {
    type: Boolean,
  },
  starred: {
    type: Boolean
  },
  // idMemeberCreator: {
  //   type: String,
  //   ref: 'Membre',
  // }
}, {timestamps: true});

module.exports = mongoose.model('Board', boardSchema);
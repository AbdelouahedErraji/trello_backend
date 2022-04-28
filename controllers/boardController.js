const Board = require('../models/board');

exports.createBoard = (req, res) => {
  const board = new Board(req.body);
  board.save((err, board) => {
    if(err) {
      return res.status(400).json({
        error: "Bad request"
      })
    }
    res.json({
      board
    })
  });
}
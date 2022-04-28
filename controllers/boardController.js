const Board = require('../models/board');

exports.createBoard = (req, res) => {
  const board = new Board(req.body);
  board.save()
    .then((board) => {res.json(board)})
    .catch((err) => {console.log(err)});
}

exports.getAllBoards = (req, res) => {
  Board.find()
    .then((boards) => {res.json(boards)})
    .catch((err) => {console.log(err.message)});
}

exports.boardById = (req, res) => {
    Board.findById(req.params.id)
    .then((board) => {res.json(board)})
    .catch((err) => {console.log(err.message)});
}

exports.boardDelete = (req, res) => {
  Board.findByIdAndDelete(req.params.id)
    .then((board) => {res.json({})})
    .catch((err) => {console.log(err)});
}

exports.boardUpdate = async (req, res) => {
  Board.findByIdAndUpdate(req.params.id, req.body)
    .then((board) => {res.json(board)})
    .catch((err) => {console.log(err)});

  // const board = await Board.findById(req.params.id);
  // Board.assign(board, req.body);
}

// exports.boardById = async (req, res) => {
//   try{
//     const board = await Board.findById(req.params.id);
//     res.json(board);
//     console.log(board);
//   } catch(err) {
//     console.log(err)
//   }
// }
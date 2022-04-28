const express = require('express');
const router = express.Router();
const Board = require('../models/board');
const {createBoard, boardById, getAllBoards, boardDelete, boardUpdate} = require('../controllers/boardController');

router.post('/create', createBoard);
router.get('/', getAllBoards);
router.get('/:id', boardById);
router.delete('/:id', boardDelete);
router.put('/:id', boardUpdate);

module.exports = router;
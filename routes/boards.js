const express = require('express');
const router = express.Router();
const Board = require('../models/board');
const {createBoard} = require('../controllers/boardController');

router.post('/create', createBoard);

module.exports = router;
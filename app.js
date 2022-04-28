// const { MongoClient } = require ("mongodb");
const mongoose = require('mongoose');
const express = require('express');

//Import rooutes
const boardRoutes = require('./routes/boards');

//Config
require('dotenv').config();
const app = express();

//DB Connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('db connected'))
.catch((err) => console.log(err));

//middleware & static files
app.use(express.json());

//Routes Middleware
app.use('/board', boardRoutes);

app.get('/' ,(req, res) => {
  res.status(200).send("Hello");
});

app.get((req, res) => {
  res.status(200).send("404 Page not found");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}...`);
})
// const { MongoClient } = require ("mongodb");
const mongoose = require('mongoose');
const express = require('express');


require('dotenv').config();
const app = express();


mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('db connected'))
.catch((err) => console.log(err));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}...`);
})
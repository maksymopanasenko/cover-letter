const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();


const routes = require("./src/routes/index.js");

const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


app.use('/api/statistics', routes);
app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
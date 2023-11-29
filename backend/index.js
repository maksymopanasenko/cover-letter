const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const _ = require("lodash");


// const routes = require("./src/routes/index.js");
// const Statistic = require('./src/models/Statistic.js');
// const queryCreator = require('./src/commonHelpers/queryCreator.js');
// const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatisticSchema = new Schema(
  {
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,      
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  { strict: false }
);

const Statistic = mongoose.model("statistics", StatisticSchema);


function queryCreator(data) {
  return Object.keys(data).reduce((queryObject, param) => {
    if (isJSON(data[param])) {
      queryObject[param] = JSON.parse(data[param]);
    } else if (
      !excludedParams.includes(param)
    ) {
      queryObject[param] = data[param];
    }

    return queryObject;
  }, {});
}

const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


// app.use('/api/statistics', routes);
app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
});

app.post('/', (req, res, next) => {
    Statistic.findOne({ city: req.body.city })
      .then((statistic) => {
        if (!statistic) {
          const initialQuery = _.cloneDeep(req.body);
          initialQuery.count = 1;
  
          const newStatistic = new Statistic(queryCreator(initialQuery));
  
          newStatistic
            .save()
            .then((statistic) => res.json(statistic))
            .catch((err) =>
              res.status(400).json({
                message: `Error happened on server: "${err}"`,
              })
            );
        } else {
          Statistic.findOneAndUpdate(
            { city: req.body.city },
            { $inc: { count: 1 } },
            { new: true }
          )
            .then((cart) => res.json(cart))
            .catch((err) =>
              res.status(400).json({
                message: `Error happened on server: "${err}" `,
              })
            );
        }
      })
      .catch((err) =>
        res.status(400).json({
          message: `Error happened on server: "${err}" `,
        })
      );
  });

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
const Statistic = require("../models/Statistic");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.vote = (req, res, next) => {
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
};
const mongoose = require("mongoose");
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

module.exports = Statistic = mongoose.model("statistics", StatisticSchema);

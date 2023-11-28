const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();


// const globalConfigs = require('./backend/routes/globalConfigs');
// ./backend/routes/globalConfigs
const statistics = require('./src/routes/statistics');

// const mainRoute = require('./routes/index');

const app = express();

app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./src/config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, {useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


// Use Routes
// app.use('/api/configs', globalConfigs);
app.use('/api/statistics', statistics);

// app.use('/', mainRoute);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));


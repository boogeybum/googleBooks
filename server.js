require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here
const mongoose = require('mongoose');
const mongoURL =
  process.env.PROD_MONGODB || 'mongodb://fishfry:g44bJRvuc3q7zy7@ds153096.mlab.com:53096/heroku_86vq5pqd';
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log('🗄 ==> Successfully connected to mongoDB.');
  })
  .catch(err => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

// Send every other request to the React app
require('./routes/api-routes')(app);

// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

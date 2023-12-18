const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB!!!');
  } catch (err) {
    console.error(err);
  }
};

connectToMongo();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('serving on port 3000');
});

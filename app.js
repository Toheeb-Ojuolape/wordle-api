const express = require('express');
// const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const app = express();
const port = process.env.PORT || 5000

// middleware
app.use(express.json())

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Origin', 'https:/books.tell.africa');
  res.setHeader('Access-Control-Allow-Origin', 'https://books.tell.africa');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






// routes
app.use(authRoutes)
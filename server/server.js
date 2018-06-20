const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const indexRouter = require('./routers/index_router.js');

const publicPath = path.join(__dirname, '../client/build');
app.use(express.static(publicPath));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(parser.json());
app.use(indexRouter);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

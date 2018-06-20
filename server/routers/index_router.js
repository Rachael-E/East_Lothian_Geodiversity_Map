const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mapDataRouter = require('./mapdata_router.js');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('mapdata');
  const mapDataInfo = db.collection('mapDataInfo');
  router.use('/api/mapDataInfo', mapDataRouter(mapDataInfo));
});


module.exports = router;

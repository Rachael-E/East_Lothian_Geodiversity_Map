const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const mapDataRouter = function (mapDataInfo){
  router.get('/', (req,res) => {
    mapDataInfo
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });
  return router;
};

module.exports = mapDataRouter;

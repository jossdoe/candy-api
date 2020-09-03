const express = require('express');
const {
  getAllCandy,
  getCandyById,
  getCandyByName,
  getCandyByCategory,
} = require('../controllers/candy');

const api = express.Router();

api.route('/').get(getAllCandy);
api.route('/id/:id').get(getCandyById);
api.route('/name/:name').get(getCandyByName);
api.route('/:cat').get(getCandyByCategory);

module.exports = api;

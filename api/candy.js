const express = require('express');
const { getAllCandy } = require('../controllers/candy');

const api = express.Router();

api.route('/').get(getAllCandy);

module.exports = api;

const express = require('express');
const { getAllCandy } = require('../controllers/candy');

const api = express.Router();

api.route('/').get(getAllCandy);

// api
//   .route('/:id')
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser)

module.exports = api;

require('dotenv').config();
require('colors');
const express = require('express');
const cors = require('cors');

const connectDB = require('./dbinit');
const candy = require('./api/candy');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/', candy);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Started server on port ${PORT}`.rainbow.bold.inverse)
);

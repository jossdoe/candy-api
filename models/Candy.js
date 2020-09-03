const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  chocolate: {
    type: Number,
  },
  fruity: {
    type: Number,
  },
  caramel: {
    type: Number,
  },
  peanutyalmondy: {
    type: Number,
  },
  nougat: {
    type: Number,
  },
  crispedricewafer: {
    type: Number,
  },
  hard: {
    type: Number,
  },
  bar: {
    type: Number,
  },
  pluribus: {
    type: Number,
  },
  sugarpercent: {
    type: String,
  },
  pricepercent: {
    type: String,
  },
});

module.exports = mongoose.model('Candy', CandySchema);

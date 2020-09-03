const Candy = require('../models/Candy');

const getAllCandy = async (req, res, next) => {
  try {
    const candy = await Candy.find();
    const cleanCandy = JSON.parse(JSON.stringify(candy));

    res.json({
      success: true,
      msg: 'show all the candy',
      data: cleanCandy.map(({ winpercent, ...properties }) => ({
        ...properties,
      })),
    });
  } catch (err) {
    next(err);
  }
};

const getCandyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const candy = await Candy.find({ _id: id });
    const cleanCandy = JSON.parse(JSON.stringify(candy));

    res.json({
      success: true,
      msg: `show candy with id ${id}`,
      data: cleanCandy.map(({ winpercent, ...properties }) => ({
        ...properties,
      })),
    });
  } catch (err) {
    next(err);
  }
};

const getCandyByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    const candy = await Candy.find({ name: { $regex: name, $options: 'i' } });
    const cleanCandy = JSON.parse(JSON.stringify(candy));

    res.json({
      success: true,
      msg: `show candy where name contains ${name}`,
      data: cleanCandy.map(({ winpercent, ...properties }) => ({
        ...properties,
      })),
    });
  } catch (err) {
    next(err);
  }
};

const getCandyByCategory = async (req, res, next) => {
  try {
    const { cat } = req.params;

    const candy = await Candy.find({ [cat]: 1 });
    const cleanCandy = JSON.parse(JSON.stringify(candy));

    res.json({
      success: true,
      msg: `show candy that fits category ${cat}`,
      data: cleanCandy.map(({ winpercent, ...properties }) => ({
        ...properties,
      })),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCandy,
  getCandyById,
  getCandyByName,
  getCandyByCategory,
};

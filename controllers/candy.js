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

module.exports = {
  getAllCandy,
};

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

// const getUser = async (req, res, next) => {
//   // 5f4d75a8bf290843cc1e7f96
//   try {
//     const { id } = req.params;
//     const user = await User.find({ _id: id });
//     res.json({ success: true, msg: 'show selected user', data: user })
//   } catch(err) {
//     next(err)
//   }
// };

// const createUser = async (req, res, next) => {
//   try {
//     const { name, surname, age } = req.body;
//     const user = await User.create({ name, surname, age});

//     res.json({ success: true, msg: 'show new user', data: user })
//   } catch(err) {
//     next(err)
//   }
// };

// const deleteUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndDelete(id);
//     res.json({ success: true, msg: `user with id ${id} deleted`, data: user })
//   } catch(err) {
//     next(err)
//   }
// };

// const updateUser = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { name, surname, age } = req.body;

//     const user = await User.findByIdAndUpdate(id, { name, surname, age }, { new: true });
//     res.json({ success: true, msg: `user with id ${id} updated`, data: user })
//   } catch(err) {
//     next(err)
//   }
// };

module.exports = {
  getAllCandy,
};

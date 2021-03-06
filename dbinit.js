const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    };

    const conn = await mongoose.connect(process.env.MONGO_URI, options);
    //conn.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

    console.log(`Mongo DB connected ${conn.connection.host}`.yellow.underline);
  } catch (e) {
    console.error(e);
  }
};

module.exports = connectDB;

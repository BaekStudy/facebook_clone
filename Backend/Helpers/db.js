const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
      })
      .then(console.log("몽고디비와 연결됨"))
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

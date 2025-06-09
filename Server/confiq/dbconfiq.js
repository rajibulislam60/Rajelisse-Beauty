const mongoose = require("mongoose");

const DBConnect = async () => {
  mongoose
    .connect(process.env.MongoDB_URL)
    .then(() => {
      console.log("DataBase is connect.");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = DBConnect;

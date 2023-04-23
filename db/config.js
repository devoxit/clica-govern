const mongo = require("mongoose");

const connectDB = (url) => {
  return mongo.connect(url)
    .then(() => console.log("connecting..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
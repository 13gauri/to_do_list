const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Tasks_db");

module.exports = mongoose;

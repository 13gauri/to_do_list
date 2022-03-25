const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: String,
  category: String,
});

module.exports = mongoose.model("task", taskSchema);

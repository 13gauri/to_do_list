const TaskModel = require("../models/task");

//__To create task
exports.createTask = async (req, res) => {
  try {
    const newTask = new TaskModel(req.body);
    res.status(201).json(await newTask.save());
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//to get all tasks information
exports.getAllTaskInfo = async (req, res) => {
  try {
    const task = await TaskModel.find();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//to get information of specified task
exports.getTaskInfo = async (req, res) => {
  try {
    const task = await TaskModel.find({ _id: req.params.taskId });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//to update information of specified task
exports.updateTaskInfo = (req, res) => {
  TaskModel.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(data);
      }
    }
  );
};

//to delete information of specified task
exports.deleteTaskInfo = (req, res) => {
  TaskModel.findOneAndDelete({ _id: req.params.taskId }, (err, data) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
};

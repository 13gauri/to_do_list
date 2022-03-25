const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task");

//to create new task
router.post("/", taskController.createTask);

//to get all task information
router.get("/", taskController.getAllTaskInfo);

//to get information of specified task
router.get("/:taskId", taskController.getTaskInfo);

//to update information of specified task
router.put("/:taskId", taskController.updateTaskInfo);

//to delete information of specified task
router.delete("/:taskId", taskController.deleteTaskInfo);

module.exports = router;

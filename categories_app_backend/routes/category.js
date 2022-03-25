const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/category");

//to create new task
router.post("/", categoryController.createCategory);

//to get all category information
router.get("/", categoryController.getAllCategoryInfo);

//to get information of specified category
router.get("/:categoryId", categoryController.getCategoryInfo);

//to update information of specified category
router.put("/:categoryId", categoryController.updateCategoryInfo);

//to delete information of specified category
router.delete("/:categoryId", categoryController.deleteCategoryInfo);

module.exports = router;

const CategoryModel = require("../models/category");

//__To create category
exports.createCategory = async (req, res) => {
  try {
    const newCategory = new CategoryModel(req.body);
    res.status(201).json(await newCategory.save());
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//to get all categories information
exports.getAllCategoryInfo = async (req, res) => {
  try {
    const all_category = await CategoryModel.find();
    res.status(200).json(all_category);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//to get information of specified category
exports.getCategoryInfo = async (req, res) => {
  try {
    const category_id = await CategoryModel.find({
      _id: req.params.categoryId,
    });
    res.status(200).json(category_id);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//to update information of specified category
exports.updateCategoryInfo = (req, res) => {
  CategoryModel.findOneAndUpdate(
    { _id: req.params.categoryId },
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

//to delete information of specified category
exports.deleteCategoryInfo = (req, res) => {
  CategoryModel.findOneAndDelete(
    { _id: req.params.categoryId },
    (err, data) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json(data);
      }
    }
  );
};

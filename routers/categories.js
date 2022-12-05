const express = require("express");
const router = express.Router();
const { Category } = require("../models/categories");
const app = express();
const api = process.env.API_URL;

router.get(`/`, async (req, res, next) => {
  console.log(Category);
  res.send(
    (await Category.find())
      ? await Category.find()
      : res.status(500).json({ success: false })
  );
});

router.get(`/:id`, async (req, res, next) => {
  console.log(Category);
  res.send(await Category.findById(req.params.id));
});

router.post(`/`, async (req, res, next) => {
  let newCategory = new Category({
    name: req.body.name,
    image: req.body.image,
    icon: req.body.icon,
    color: req.body.color,
  });
  newCategory = await newCategory.save();
  newCategory
    ? res.send(newCategory)
    : res.status(500).send("the category cannot be created");
});

router.put(`/:id`, async (req, res, next) => {
  let newCategory = await Category.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    },
    { new: true }
  );
  newCategory
    ? res.send(newCategory)
    : res.status(500).send("the category cannot be updated");
});

router.delete(`/:id`, async (req, res, next) => {
  Category.findByIdAndRemove(req.params.id)
    .then((category) => {
      if (category) {
        return res
          .status(404)
          .json({ success: true, message: "category deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "category not found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ success: false, message: err });
    });
});

module.exports = router;

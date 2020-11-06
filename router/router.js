const express = require("express");

const Recipe = require("./resipe-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Recipe" });
    });
});

router.get("/:id/ingred", (req, res) => {
  const { id } = req.params;

  Recipe.getShoppingList(id)
    .then((ingred) => {
      if (ingred.length) {
        res.json(ingred);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given scheme" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipe.getInstructions(id)
    .then((ingred) => {
      if (ingred.length) {
        res.json(ingred);
      } else {
        res
          .status(404)
          .json({ message: "Could not find steps for given scheme" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;

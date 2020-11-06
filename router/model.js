const db = require("../data/db-config");

module.exports = {
  getRecipes() {
    return db("resipes");
  },
  getShoppingList(recipe_id) {
    return db("resipes as r")
      .join("link_R-I as l", "r.id", "l.resipes_id")
      .join("indgredients as i", "i.id", "l.ingredient_id")
      .select("i.ingredient_name", "l.quantity")
      .where({ "r.id": recipe_id });
  },
  getInstructions(recipe_id) {
    return db("steps as s")
      .join("resipes as r", "r.id", "s.resipes_id")
      .join("indgredients as i", "i.id", "s.ingredient_id")
      .select("i.ingredient_name", "s.slot")
      .where({ "r.id": recipe_id });
  },
};

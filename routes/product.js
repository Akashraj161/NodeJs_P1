const express = require("express")
const router = express.Router();

//importing the controllers
const {getAllProducts , getAllProductTesting } = require("../controllers/products");

// defining the routes and calling the function upon hitting certain routes.
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductTesting);

module.exports = router;
const express = require("express");
const pageController = require("../controllers/pageController")
const redirectMiddleware = require("../middlewares/redirectMiddleware")

const router = express.Router()

router.route("/").get(pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)
router.route("/register").get(redirectMiddleware,pageController.getRegisterPage) //redirectMiddleware deneme icin sildim
router.route("/login").get(redirectMiddleware,pageController.getLoginPage) //redirectMiddleware deneme icin sildim

module.exports = router
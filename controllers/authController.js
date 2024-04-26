const User = require("../models/User");
const Category = require("../models/Category");
const bcrypt = require("bcrypt");
const Course = require("../models/Course");


exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).redirect("/login")
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user)

    if (!user) {
      res.status(400).send("kullanici yok");
    }

    const same = await bcrypt.compare(password, user.password);
      //USER SESSION
      req.session.UserID = user._id
      res.status(200).redirect("/users/dashboard")
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.logoutUser = (req, res) => {
  req.session.destroy(()=> {
    res.redirect('/');
  })
}

exports.getDashboardPage = async (req,res) => {
  const user = await User.findOne({_id:req.session.UserID}).populate("courses") //user üzerinden usera ait courses bilgilerine erişim
  const categories = await Category.find()
  const courses = await Course.find({user:req.session.UserID})

  res.status(200).render("dashboard",{
    page_name:"dashboard",
    user,
    categories,
    courses
  })
};

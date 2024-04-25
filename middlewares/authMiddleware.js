const User = require("../models/User")

module.exports = async (req, res, next) => { 

  console.log(req.session.UserID)

  if (!req.session.UserID) { 
    console.log("User not authenticated"); 
    return res.redirect("/login"); 
  } try { 
    const user = await User.findById(req.session.UserID); 
    if (!user) { 
      console.log("User not found"); 
      return res.redirect("/login"); 
    } 
    console.log("User authenticated:", user); 
    next(); 
  } catch (error) { 
    console.log("Error finding user:", error); 
    res.redirect("/login"); 
  } 
};

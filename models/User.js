const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcyrpt = require("bcrypt")

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role: {
    type:String,
    enum: ["Student","Teacher","Admin"],
    default: "Student"
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Course"
  }]
});

UserSchema.pre("save", function(next){
  const user = this
  bcyrpt.hash(user.password,10,(error,hash) => {
    user.password = hash
    next()
  })
})



const User = mongoose.model("User",UserSchema)
module.exports = User
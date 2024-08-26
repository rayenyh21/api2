const mongoose = require("mongoose");

const UserSchema= mongoose.Schema({
    name:String,
    age: Number,
    Email:{ type :String , require: true}
});
const User=mongoose.model("User",UserSchema);
module.exports=User;

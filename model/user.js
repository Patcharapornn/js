// เชื่อมกับ mongodb

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    e: String,
    password: String,
    name: String,

 })
 
//สร้างโมเดล
let Users = mongoose.model("User",userSchema)

//ส่งออกโมเดล
module.exports = Users
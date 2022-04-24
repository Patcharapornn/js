// เชื่อมกับ mongodb

const mongoose = require('mongoose')

//เชื่อมไปยัง Mongodb


const userSchema = new mongoose.Schema({

    e: String,
    password: String,
    name: String,
    data:{
        subject:String,
        n:Number,
        score:String
    }

})

//สร้างโมเดล
let Users = mongoose.model("User",userSchema)

//ส่งออกโมเดล
module.exports = Users
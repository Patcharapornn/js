// เชื่อมกับ mongodb

const mongoose = require('mongoose')

//เชื่อมไปยัง Mongodb


const subjecttSchema = new mongoose.Schema({

    cc: String,
    namesubjectt: String,
    unitt: Number,
    gradee:String,


    c22: String,
    namesubject22: String,
    unit22: Number,
    grade22:String,

    c33: String,
    namesubject33: String,
    unit33: Number,
    grade33:String,

    c44: String,
    namesubject44: String,
    unit44: Number,
    grade4:String,

    c55: String,
    namesubject55: String,
    unit55: Number,
    grade55:String,

    c66: String,
    namesubject66: String,
    unit66: Number,
    grade66:String,

    totalunit2:Number,
    
    total2:Number



    

   
 })
 
//สร้างโมเดล
let Subjectss = mongoose.model("Subject2",subjecttSchema)

//ส่งออกโมเดล
module.exports = Subjectss
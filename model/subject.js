// เชื่อมกับ mongodb

const mongoose = require('mongoose')

//เชื่อมไปยัง Mongodb


const subjectSchema = new mongoose.Schema({

    c: String,
    namesubject: String,
    unit: Number,
    grade:String,
    
    total:Number


    

   
 })
 
//สร้างโมเดล
let Subjects = mongoose.model("Subject",subjectSchema)

//ส่งออกโมเดล
module.exports = Subjects
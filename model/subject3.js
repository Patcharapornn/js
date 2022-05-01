// เชื่อมกับ mongodb

const mongoose = require('mongoose')

//เชื่อมไปยัง Mongodb


const subjectttSchema = new mongoose.Schema({

    ccc: String,
    namesubjecttt: String,
    unittt: Number,
    gradeee:String,


    c222: String,
    namesubject222: String,
    unit222: Number,
    grade222:String,

    c333: String,
    namesubject333: String,
    unit333: Number,
    grade333:String,

    c444: String,
    namesubject444: String,
    unit444: Number,
    grade444:String,

    c555: String,
    namesubject555: String,
    unit555: Number,
    grade555:String,

    c666: String,
    namesubject666: String,
    unit666: Number,
    grade666:String,

    c777: String,
    namesubject777: String,
    unit777: Number,
    grade777:String,

    totalunit3:Number,
    
    total3:Number



    

   
 })
 
//สร้างโมเดล
let Subjectsss = mongoose.model("Subject3",subjectttSchema)

//ส่งออกโมเดล
module.exports = Subjectsss
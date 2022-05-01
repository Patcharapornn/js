// เชื่อมกับ mongodb

const mongoose = require('mongoose')

//เชื่อมไปยัง Mongodb


const subjectSchema = new mongoose.Schema({


    e:String,

    c: String,
    namesubject: String,
    unit: Number,
    grade:String,


    c2: String,
    namesubject2: String,
    unit2: Number,
    grade2:String,

    c3: String,
    namesubject3: String,
    unit3: Number,
    grade3:String,

    c4: String,
    namesubject4: String,
    unit4: Number,
    grade4:String,

    c5: String,
    namesubject5: String,
    unit5: Number,
    grade5:String,

    c6: String,
    namesubject6: String,
    unit6: Number,
    grade6:String,

    c7: String,
    namesubject7: String,
    unit7: Number,
    grade7:String,

    totalunit:Number,
    
    total:Number



    

   
 })
 
//สร้างโมเดล
let Subjects = mongoose.model("Subject",subjectSchema)

//ส่งออกโมเดล
module.exports = Subjects
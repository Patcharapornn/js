// เชื่อมกับ mongodb

const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({


    e:String,

    term:Number,
    year:Number,
  
    namesubject1: String,
    unit1: Number,
    grade1:Number,


    namesubject2: String,
    unit2: Number,
    grade2:Number,

    
    namesubject3: String,
    unit3: Number,
    grade3:Number,

   
    namesubject4: String,
    unit4: Number,
    grade4:Number,

    
    namesubject5: String,
    unit5: Number,
    grade5:Number,

    namesubject6: String,
    unit6: Number,
    grade6:Number,

    
    namesubject7: String,
    unit7: Number,
    grade7:Number,

    totalunit:Number


     
 })
 
//สร้างโมเดล
let Subjects = mongoose.model("Subject",subjectSchema)

//ส่งออกโมเดล
module.exports = Subjects
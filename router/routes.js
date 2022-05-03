// routing  จัดการการรับส่งข้อมูล
// ควบคุมเงื่อนไข
const { render } = require('ejs')
const express = require('express') // ดึง express มาใช้งาน
const User = require('../model/user')   // ดึงข้อมูล user มา
const Subject  = require('../model/subject')    // ดึง subject


const router = express.Router()


const isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
  return res.redirect('/login');
  }
  next()
}
router.get('/',(req,res)=>{         
    res.render('index.ejs')
})

router.get('/home',isLoggedIn,(req,res)=>{         
    res.render('home.ejs',{user:req.session.user})   //session เอาไว้กำหนด
})


router.get('/showgrade',isLoggedIn,async(req,res)=>{


    let sj = await Subject.find({e: req.session.user.e})
    for (let index in sj) {
      sj[index] = {
        unit1: 0,
        grade1: 0,
        unit2:0,
        grade2: 0,
        unit3:0,
        grade3: 0,
        unit4:0,
        grade4: 0,
        unit5:0,
        grade5: 0,
        unit6:0,
        grade6: 0,
        unit7:0,
        grade7: 0,
        ...sj[index]._doc
      };
    }
   
    console.log(sj)
    res.render('showgrade',{user:req.session.user,subject:sj})
  })




  
router.get('/home',isLoggedIn,(req,res)=>{
res.render('home',{user:req.session.user})
           
  
})

router.get('/allgrade',isLoggedIn, async (req,res)=>{
  let sj = await Subject.find({e: req.session.user.e})
  let grade = [];
  for (let index in sj) {
    sj[index] = {
      unit1: 0,
      grade1: 0,
      unit2:0,
      grade2: 0,
      unit3:0,
      grade3: 0,
      unit4:0,
      grade4: 0,
      unit5:0,
      grade5: 0,
      unit6:0,
      grade6: 0,
      unit7:0,
      grade7: 0,
      ...sj[index]._doc
    };
    let total = (((sj[index].unit1 *  sj[index].grade1) +(sj[index].unit2 *  sj[index].grade2)+
    (sj[index].unit3 *  sj[index].grade3)+(sj[index].unit4 *  sj[index].grade4)+(sj[index].unit5 *  sj[index].grade5)+
    (sj[index].unit6 *  sj[index].grade6) +(sj[index].unit7 *  sj[index].grade7)) / (sj[index].unit1 + sj[index].unit2 + sj[index].unit3 + sj[index].unit4 + sj[index].unit5 + sj[index].unit6 + sj[index].unit7)).toFixed(2)
    grade.push(total);
  }

  if (grade.length < 3) {
    grade = [0, 0, 0];
  }

  res.render('allgrade',{user:req.session.user, grade: grade})
             

})





  

router.get('/calgrade',isLoggedIn,(req,res)=>{         //แสดงผลเนื้อหาใน views
  res.render('calgrade.ejs',{user:req.session.user})
})

// ส่วนของการ login
router.get('/login',(req,res)=>{    
  res.render('login.ejs')     //แสดงผลเนื้อหาใน views
   
})

router.post('/a')




// ของ register

router.post('/login',async(req,res)=>{
  
  const user = await User.findOne({
    e:req.body.userID,
    password :req.body.password
  })
  if(user){
    req.session.user = user
    
    res.render('home',{user})
    
  }
  else{
    
    res.render('login')
    

  }
})






router.post('/register',async(req, res) => {
  const user = new User({


      e: req.body.e,
      
      password : req.body.password,
      name :  req.body.name
      
    
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
    }catch (err) {
    res.status(400).json({ message: err.message })
    }
})


router.post('/termgrade1',(req, res) => {

  if(req.body.grade == "A"){
    req.body.grade = "4"
  }
  const subject = new Subject({

    e:req.session.user.e,

    term:req.body.term,
    year:req.body.year,
     
      namesubject1:req.body.namesubject1,
      unit1:req.body.unit1,
      grade1:req.body.grade1,

     
      namesubject2: req.body.namesubject2,
      unit2: req.body.unit2,
      grade2:req.body.grade2,

   
      namesubject3: req.body.namesubject3,
      unit3: req.body.unit3,
      grade3:req.body.grade3,

    
      namesubject4: req.body.namesubject4,
      unit4: req.body.unit4,
      grade4:req.body.grade4,
      
      namesubject5: req.body.namesubject5,
      unit5: req.body.unit5,
      grade5:req.body.grade5,
      
    
      namesubject6: req.body.namesubject6,
      unit6: req.body.unit6,
      grade6:req.body.grade6,

     
      namesubject7: req.body.namesubject7,
      unit7: req.body.unit7,
      grade7:req.body.grade7,

        

      
    
    
  })

  try {
     subject.save()
   
       res.redirect('/home')
    
    
    }catch (err) {
    res.status(400).json({ message: err.message })
    }
})








module.exports = router   // export router ให้ไฟล์อื่นใช้งาน
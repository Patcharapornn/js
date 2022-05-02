// routing  จัดการการรับส่งข้อมูล
// ควบคุมเงื่อนไข
const { render } = require('ejs')
const express = require('express') // ดึง express มาใช้งาน
const User = require('../model/user')
const Subject  = require('../model/subject')


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


  const sj = await Subject.find({e: req.session.user.e})
    res.render('showgrade',{user:req.session.user,subject:sj})
  })




  
router.get('/home',isLoggedIn,(req,res)=>{
res.render('home',{user:req.session.user})
           
  
})

router.get('/allterm',isLoggedIn,(req,res)=>{
  res.render('allterm',{user:req.session.user})

})


  

router.get('/calgrade',isLoggedIn,(req,res)=>{         //แสดงผลเนื้อหาใน views
  res.render('calgrade.ejs',{user:req.session.user})
})

// ส่วนของการ login
router.get('/login',(req,res)=>{    
  res.render('login.ejs')     //แสดงผลเนื้อหาใน views
   
})




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

      totalunit:req.body.totalunit,

   
    
      total:req.body.total
      
    
    
  })

  try {
     subject.save()
   
       res.redirect('/home')
    
    
    }catch (err) {
    res.status(400).json({ message: err.message })
    }
})



module.exports = router   // export router ให้ไฟล์อื่นใช้งาน
// routing  จัดการการรับส่งข้อมูล
// ควบคุมเงื่อนไข
const { render } = require('ejs')
const express = require('express') // ดึง express มาใช้งาน
const User = require('../model/user')
const Subject  = require('../model/subject')

const router = express.Router()


const isLoggedIn = (req, res, next) => {
  if (!req.user) {
  return res.redirect('/login');
  }
  next()
}
router.get('/',(req,res)=>{         
    res.render('index.ejs')
})

router.get('/home',isLoggedIn,(req,res)=>{         
    res.render('home.ejs',{user:req.user})

})

router.get('/showgrade',(req,res)=>{         //แสดงผลเนื้อหาใน views
  res.render('showgrade.ejs')
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
    req.user = user
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


router.post('/showgrade',async(req, res) => {
  const subject = new Subject({


      c: req.body.c,
      namesubject:req.body.namesubject,
      unit:req.body.unit,
      grade:req.body.grade,
      total:req.body.total
      
    
    
  })
  try {
    const newSubject = await subject.save()
    res.status(201).json(newSubject)
    }catch (err) {
    res.status(400).json({ message: err.message })
    }
})


module.exports = router   // export router ให้ไฟล์อื่นใช้งาน
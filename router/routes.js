// routing  จัดการการรับส่งข้อมูล
// ควบคุมเงื่อนไข
const { render } = require('ejs')
const express = require('express') // ดึง express มาใช้งาน
const User = require('../model/user')
const router = express.Router()



router.get('/index',(req,res)=>{         //แสดงผลเนื้อหาใน views
    res.render('index.ejs')
})

router.get('/home',(req,res)=>{         //แสดงผลเนื้อหาใน views
    res.render('home.ejs')
})

router.get('/showgrade',(req,res)=>{         //แสดงผลเนื้อหาใน views
  res.render('showgrade.ejs')
})


// ส่วนของการ login
router.get('/login',(req,res)=>{    
  res.render('login.ejs')     //แสดงผลเนื้อหาใน views
   
})
router.post('/login',async(req,res)=>{
  const {userID,password} = req.body
  const user = await User.findOne({
    userID,
    password
  })
  if(user){
    req.user = user
    res.render('home.ejs',{user})
  }
  else{
    
    res.render('login')
    

  }
})

// ดูตรงนี้

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





module.exports = router   // export router ให้ไฟล์อื่นใช้งาน
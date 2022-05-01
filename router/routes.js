// routing  จัดการการรับส่งข้อมูล
// ควบคุมเงื่อนไข
const { render } = require('ejs')
const express = require('express') // ดึง express มาใช้งาน
const User = require('../model/user')
const Subject  = require('../model/subject')
const Subjects  = require('../model/subject2')

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
  res.render('showgrade.ejs',{user:req.user})

})

router.get('/calgrade',(req,res)=>{         //แสดงผลเนื้อหาใน views
  res.render('calgrade.ejs',{user:req.user})
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


router.post('/termgrade1',async(req, res) => {
  const subject = new Subject({


      c: req.body.c,
      namesubject:req.body.namesubject,
      unit:req.body.unit,
      grade:req.body.grade,

      c2: req.body.c2,
      namesubject2: req.body.namesubject2,
      unit2: req.body.unit2,
      grade2:req.body.grade2,

      c3: req.body.c3,
      namesubject3: req.body.namesubject3,
      unit3: req.body.unit3,
      grade3:req.body.grade3,

      c4: req.body.c4,
      namesubject4: req.body.namesubject4,
      unit4: req.body.unit4,
      grade4:req.body.grade4,
      
      c5: req.body.c5,
      namesubject5: req.body.namesubject5,
      unit5: req.body.unit5,
      grade5:req.body.grade5,
      
      c6: req.body.c6,
      namesubject6: req.body.namesubject6,
      unit6: req.body.unit6,
      grade6:req.body.grade6,

      c7: req.body.c7,
      namesubject7: req.body.namesubject7,
      unit7: req.body.unit7,
      grade7:req.body.grade7,

      totalunit:req.body.totalunit,

   
    
      total:req.body.total
      
    
    
  })
  try {
    const newSubject = await subject.save()
    res.status(201).json(newSubject)
    }catch (err) {
    res.status(400).json({ message: err.message })
    }
})

router.post('/termgrade2',async(req, res) => {
  const subjectt = new Subjects({


      cc: req.body.cc,
      namesubjectt:req.body.namesubjectt,
      unitt:req.body.unitt,
      gradee:req.body.gradee,

      c22: req.body.c22,
      namesubject22: req.body.namesubject22,
      unit22: req.body.unit22,
      grade22:req.body.grade22,

      c33: req.body.c33,
      namesubject33: req.body.namesubject33,
      unit33: req.body.unit33,
      grade33:req.body.grade33,

      c44: req.body.c44,
      namesubject44: req.body.namesubject44,
      unit44: req.body.unit44,
      grade44:req.body.grade44,
      
      c55: req.body.c55,
      namesubject55: req.body.namesubject55,
      unit55: req.body.unit55,
      grade55:req.body.grade55,
      
      c66: req.body.c66,
      namesubject66: req.body.namesubject66,
      unit66: req.body.unit66,
      grade66:req.body.grade66,

      totalunit2:req.body.totalunit2,

  

   
    
      total2:req.body.total2
      
    
    
  })
  try {
    const newSubjectt = await subjectt.save()
    res.status(201).json(newSubjectt)
    }catch (err) {
    res.status(400).json({ message: err.message })
    }
})


module.exports = router   // export router ให้ไฟล์อื่นใช้งาน
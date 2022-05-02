
// เรียกใช้
const session = require('express-session')
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express') 
const path = require('path')
const router = require('./router/routes')
const app = express()   // เก็บ express ไว้ในตัวแปร app

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
  })
  const db = mongoose.connection
  db.on('error', (error) => console.error(error))
  db.once('open',() => console.log('Connected to Database'))


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'my_super_dpplll',
    resave: false,
    saveUninitialized: false
  })
)

app.use(router)
app.use(express.static(path.join(__dirname,'public')))  
app.use(express.static(path.join(__dirname,'public/image')))    // อ้างอิงข้อมูลไฟล์ static

//app.use(router)    // เรียกใช้ router

app.set('views',path.join(__dirname,'views'))    // อ้างอิงตำแหน่ง template
app.set('view engine','ejs')

app.listen(8080,()=>{
    console.log("รัน server port 8080");


    require =('./db')

})





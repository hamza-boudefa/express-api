
// 1. import express
const express=require('express')
// 2. imort connecDB bech nrobtou l app mte3na bl database
const connectDB=require('./config/connectDB')
// 3. nasn3ou application express
const app=express()
// 4.3ayetna lel dotenv bech najmou n3aytou l data lmkhayinha fl ficher .env
require('dotenv').config()
// 5. aatina port bech nkhadmou alih l app mte3na
const port=process.env.port
// 6. aytna lel function li importineha bech norbtou database
connectDB()
// 7. yakhli l app mte3na tnajm ta9ra data sous format JSON
app.use(express.json())

// 8. importina userRouter bech najmou nsta3louh
app.use('/userAPI',require('./Routes/userRoutes'))


// 9. lancina l app mte3na
app.listen(port,(err)=>err?console.log(err):console.log('app tekhdem al port ' + port))
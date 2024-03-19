// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import form from './models/form';
// import user from "./models/user";
// import logins from "./models/logins";
// const app= express()
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())
// mongoose.connect('mongodb+srv://kalyanireddy030:UpcwqqrpcZihTGRB@cluster0.moo1i64.mongodb.net/DriveReady?retryWrites=true&w=majority')
// .then(()=>app.listen(5000))
// .then(()=>
// console.log("Connected to Database & listining to localhost 5000")
// )
// .catch((err)=>console.log(err));
// app.post('/addform',(req,res,next)=>{

//     console.log(req.body.formdata1) //formdata from the frontend
//     const {name, email, course, phonenumber}=req.body.formdata1
//     const stud=new form({
//        name,
//        email,
//        course,
//        phonenumber
//     })
//     stud.save()
//     return res.send({"project":stud})
//    // res.send({"msg":"success"})
//  })

// //  app.get('/getproject',async (req,res,next)=>{
// //     let projectdata;
// //     try{
// //      projectdata=await form.find();
// //   }catch(err){
// //      console.log(err);
// //   }
// //   if(!projectdata){
// //      return res.status(404).json({message:"No user application found"})
// //   }
// //   return res.status(200).json({projectdata})
// //   })
// //   app.delete('/deleteuser/:id',async(req,res,next)=>{
// //    const _id=req.params.id
// //    let projectdata;

// //    try{
// //       projectdata=await form.findByIdAndDelete(_id)
// //    }
// //    catch(err){
// //       console.log(err)
// //    }
// //    if(!projectdata){
// //       // return.res.status(await)
// //       return res.status(404).json({message:"No users found"})
// //    }
// //    return res.status(200).json({projectdata})
// // })

// app.get('/getproject',async (req,res,next)=>{
//    let projectdata;
//    try{
//     projectdata=await form.find();
//  }catch(err){
//     console.log(err);
//  }
//  if(!projectdata){
//     return res.status(404).json({message:"No students found"})
//  }
//  return res.status(200).json({projectdata})
//  })

//  app.delete('/deleteuser/:id',async(req,res,next)=>{
//     const _id=req.params.id
//     let projectdata;

//     try{
//        projectdata=await student.findByIdAndDelete(_id)
//     }
//     catch(err){
//        console.log(err)
//     }
//     if(!projectdata){
//        // return.res.status(await)
//        return res.status(404).json({message:"No users found"})
//     }
//     return res.status(200).json({projectdata})
//  })

//  app.get('/getstudentbyid/:id',async(req,res,next)=>{
//     const _id=req.params.id
//     let projectdata;
//     try{
//      projectdata=await form.findById(_id)
//   }catch(err){
//      console.log(err);
//   }
//   if(!projectdata){
//     console.log("no students found")
    
//   }
//   return res.status(200).json({projectdata})
//   })
 
//   app.put('/updatestudent/:id',async(req,res,next)=>{
//     const _id=req.params.id
//     const {name,email,course,phonenumber}=req.body.formdata1
//     let stud;
//     try{
//        stud=await student.findByIdAndUpdate
//        (_id,{name,email,course,phonenumber});
//     }
//     catch(err){
//        console.log(err)
//     }
//     return res.send({msg:"Updated","result":stud})
   
//  })

//   app.post('/registration',(req,res,next)=>{

//    console.log(req.body) //formdata from the frontend
//    const { username,
//       email,
//       password}=req.body
//    const person=new user({
//       username,
//     email,
//     password
//    })
//    person.save()
//    return res.send({"users":person})
//   // res.send({"msg":"success"})
// })
// app.post('/addlogin',(req,res,next)=>{
//    console.log(req.body) //formdata from the backend
//    //res.send({"msg":"success"})
//   const { username,password}=req.body
 
//    const log=new logins({
//   username,
//   password
//  })
//   log.save()
//   return res.send({"logins":log})
//  })

// // app.post('/addlogin',(req,res,next)=>{

// //    const { username,email,password}=req.body
// //    let userdata=[];
   
// //       userdata = user.find({username:username,email:email,password:password})

// //    if(userdata.length==0){
// //       res.status(400).json({msg:"invalid"})
// //    }else{
// //       res.status(200).json(userdata)
// //    }

   
// //   // res.send({"msg":"success"})
// // })

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import form from './models/form';
import employee from "./models/employee";
// import user from "./models/user";
// import logins from "./models/logins";
const app= express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

import pkg, { request } from 'express';
const {Express}=pkg;
mongoose.connect('mongodb+srv://kalyanireddy030:UpcwqqrpcZihTGRB@cluster0.moo1i64.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected to Database & listining to localhost 5000")
)
.catch((err)=>console.log(err));
app.post('/addform',(req,res,next)=>{

    console.log(req.body.formdata1) //formdata from the frontend
    const {name,date,vehicleNumber,contact,reason,timeIn}=req.body.formdata1
    const stud=new form({
       name,
       date,
       vehicleNumber,
       contact,
       reason,
       timeIn

    })
    stud.save()
    return res.send({"project":stud})
   // res.send({"msg":"success"})
 })

 app.get('/getproject',async (req,res,next)=>{
    let projectdata;
    try{
     projectdata=await form.find();
  }catch(err){
     console.log(err);
  }
  if(!projectdata){
     return res.status(404).json({message:"No user application found"})
  }
  return res.status(200).json({projectdata})
  })
  app.delete('/deleteuser1/:id',async(req,res,next)=>{
   const _id=req.params.id
   let projectdata;

   try{
      projectdata=await form.findByIdAndDelete(_id)
   }
   catch(err){
      console.log(err)
   }
   if(!projectdata){
      // return.res.status(await)
      return res.status(404).json({message:"No users found"})
   }
   return res.status(200).json({projectdata})
})
app.get('/getprojectbyid/:id',async(req,res,next)=>{
   const id=req.params.id
   let projectdata;
   try{
    projectdata=await form.findById(id)
 }catch(err){
    console.log(err);
 }
 if(!projectdata){
   console.log("no students found")
   
 }
 return res.status(200).json({projectdata})
 })

 app.put('/updateproject/:id',async(req,res,next)=>{
   const _id=req.params.id
   const {name,date,vehicleNumber,contact,reason,timeIn}=req.body.formdata1
   let stud;
   try{
      stud=await form.findByIdAndUpdate
      (_id,{name,date,vehicleNumber,contact,reason,timeIn});
   }
   catch(err){
      console.log(err)
   }
   return res.send({msg:"Updated","result":stud})
  
})

//   app.post('/registration',(req,res,next)=>{

//    console.log(req.body) //formdata from the frontend
//    const { username,
//       email,
//       password}=req.body
//    const person=new user({
//       username,
//     email,
//     password
//    })
//    person.save()
//    return res.send({"users":person})
//   // res.send({"msg":"success"})
// })
// app.post('/addlogin',(req,res,next)=>{
//    console.log(req.body) //formdata from the backend
//    //res.send({"msg":"success"})
//   const { username,password}=req.body
 
//    const log=new logins({
//   username,
//   password
//  })
//   log.save()
//   return res.send({"logins":log})
//  })

 app.post('/addemployee',(req,res,next)=>{

   console.log(req.body.formdata2) //formdata from the frontend
   const {name,vehicleNumber,contact,campus}=req.body.formdata2
   const stud=new employee({
      name,
      
      vehicleNumber,
      contact,
     campus,

   })
   stud.save()
   return res.send({"pro":stud})
  // res.send({"msg":"success"})
})

app.get('/getpro',async (req,res,next)=>{
   let prodata;
   try{
    prodata=await employee.find();
 }catch(err){
    console.log(err);
 }
 if(!prodata){
    return res.status(404).json({message:"No user application found"})
 }
 return res.status(200).json({prodata})
 })
 app.delete('/deleteuser2/:id',async(req,res,next)=>{
   const _id=req.params.id
   let prodata;

   try{
      prodata=await employee.findByIdAndDelete(_id)
   }
   catch(err){
      console.log(err)
   }
   if(!prodata){
      // return.res.status(await)
      return res.status(404).json({message:"No users found"})
   }
   return res.status(200).json({prodata})
})
app.get('/getprobyid/:id',async(req,res,next)=>{
   const id=req.params.id
   let prodata;
   try{
    prodata=await employee.findById(id)
 }catch(err){
    console.log(err);
 }
 if(!prodata){
   console.log("no students found")
   
 }
 return res.status(200).json({prodata})
 })

 app.put('/updateproject2/:id',async(req,res,next)=>{
   const _id=req.params.id
   const {name,vehicleNumber,contact,campus}=req.body.formdata2
   let stud;
   try{
      stud=await employee.findByIdAndUpdate
      (_id,{name,vehicleNumber,contact,campus});
   }
   catch(err){
      console.log(err)
   }
   return res.send({msg:"Updated","result":stud})
  
})
//admin




// app.post('/addlogin',(req,res,next)=>{

//    const { username,email,password}=req.body
//    let userdata=[];
   
//       userdata = user.find({username:username,email:email,password:password})

//    if(userdata.length==0){
//       res.status(400).json({msg:"invalid"})
//    }else{
//       res.status(200).json(userdata)
//    }

   
//   // res.send({"msg":"success"})
// })

const UserSchema = new mongoose.Schema({
   username: { type: String, required: true },
   password: { type: String, required: true },
   email: { type: String, required: true },
 });
 const User = mongoose.model('User', UserSchema);
 
 // Registration endpoint
 app.post('/register', async (req, res) => {
   console.log("success")
   try {
      console.log(req.body)
     const { username, password, email } = req.body;
     const newUser = new User({ username, password, email });
     await newUser.save();
     res.status(201).json({ success: true, message: 'User registered successfully' });
   } catch (error) {
     console.error('Registration error:', error);
     res.status(500).json({ success: false, message: 'Registration error. Please try again.' });
   }
 });
 
 // Login endpoint
 app.post('/login', async (req, res) => {
   console.log("login")
   try {
     const { username, password } = req.body;
     const user = await User.findOne({ username, password });
     if (user) {
       res.json({ success: true, message: 'Login successful' });
     } else {
       res.status(401).json({ success: false, message: 'Invalid credentials' });
     }
   } catch (error) {
     console.error('Login error:', error);
     res.status(500).json({ success: false, message:'Login error. Please try again.' });
   }
 });
 
 
 
 const ADMIN_USERNAME = 'admin';
 const ADMIN_PASSWORD = 'password';
 
 
 app.post('/admin', (req, res) => {
   const { username, password } = req.body;
 
   // Check if provided credentials match the hardcoded admin credentials
   if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
     // Successful login, respond with status 200
     res.status(200).json({ success: true, message: 'Admin login successful' });
   } else {
     // Invalid credentials, respond with status 401
     res.status(401).json({ success: false, message: 'Invalid admin credentials' });
   }
 });
//  app.listen(5000, () => {
//    console.log('Server is running on port ${5000}');
//  });

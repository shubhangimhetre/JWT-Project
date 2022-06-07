const express=require('express')
const app=express();
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
dotenv.config();

const router=require('./routes/router');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.db_connect,{useNewUrlParser:true})
.then(()=>console.log("Connected to database.."))
.catch((err)=>console.log(err));

app.use('/user',router);

app.listen(3000,()=>console.log("Server is listening at 3000"));

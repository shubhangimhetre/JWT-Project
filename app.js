const express=require('express');
const app=express();
const port=3000;
const bodyparser=require('body-parser');
const mongoose=require('mongoose')
const cookies=require('cookies')
const cookieParser=require('cookie-parser')
const DB="mongodb+srv://shubhangimhetre:Shubhangi_123@cluster0.3laey.mongodb.net/Mydb?retryWrites=true&w=majority"
const web1=require('./routes/web')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cookieParser())

mongoose.connect(DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }).then(()=>{console.log('connected to database..') })
    .catch((err)=>{ console.log(err)})

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/user',web1)

app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})
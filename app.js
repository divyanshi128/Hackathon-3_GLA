

require(`dotenv`).config();
const express= require('express');
const mongoose = require('mongoose');
const app=express();
const path=require('path');
const seedDB = require('./seed');
const quoteRoute= require('./routes/quoteRoute')
const methodOverride = require('method-override')
const DB_URL= mongodb://127.0.0.1:27017/hackathon_3

mongoose.connect(DB_URL)
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)})

app.set(`view engine` , 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

// seedDB();
app.use(quoteRoute);


const port=process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`server is connnected at port ${port}`)
})

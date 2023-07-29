

const express= require('express');
const Quotes = require('../models/Quotes');
const router=express.Router();


// display all the quote
router.get('/quotes',async  (req,res)=>{

    // finding quote
    let quotes= await Quotes.find({});
    res.render('quotes/index', {quotes});   
});

// adding a form for new quote
router.get('/quotes/new' , (req,res)=>{
    res.render('quotes/new')
})

// actually adding quote in the DB
router.post('/quotes' ,async(req,res)=>{
    let {quote , author} = req.body; //by default undefined
    // console.log(quote, author);
    await Quotes.create({quote , author});
    // res.send('check your console')
    res.redirect('/quotes');
})

//for showing details of particular quote
router.get('/quotes/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundQuote = await Quotes.findById(id);
    res.render('quotes/show' , {foundQuote})
});

// deleting a quote
router.delete('/quotes/:id', async(req,res)=>{
    let {id}= req.params;
    await Quotes.findByIdAndDelete(id);
    res.redirect('/quotes')
})
module.exports= router;

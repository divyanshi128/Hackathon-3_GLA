const mongoose= require('mongoose');

const Quotes =require('./models/Quotes');

const quote=[
    {
        author:'divyanshi agrawal',
        quote:'hello world'
    },
    {
        author:'divyanshi agrawal',
        quote:'hello world'
    },
    {
        author:'divyanshi agrawal',
        quote:'hello world'
    },
    {
        author:'divyanshi agrawal',
        quote:'hello world'
    },
    {
        author:'divyanshi agrawal',
        quote:'hello world'
    },
    {
        author:'divyanshi agrawal',
        quote:'hello world'
    },
    {
        author:'divyanshi agrawal',
        quote:'hello world'
    }
]

async function seedDB(){
    await Quotes.insertMany(quote);
    console.log('Data seeded succesfully')
}

module.exports=seedDB;
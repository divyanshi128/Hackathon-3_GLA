const mongoose=require('mongoose');
const quoteSchema= new mongoose.Schema({
    author:{
        type: String,
        trim : true,
        required : true
    },
    quote:{
        type: String,
        trim: true    }
});

const Quotes =mongoose.model('Quotes', quoteSchema);

module.exports= Quotes;
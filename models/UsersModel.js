const mongoose = require('mongoose');

const user_model = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        uppercase : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
        uppercase : true
    },
    address : {
        type : String,
        required : true,
        trim : true,
    },
    phoneNumber : {
        type : Number,
        required : true,
    },
});

const model = mongoose.model('user_table',user_model);

module.exports = model;
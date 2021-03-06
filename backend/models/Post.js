import mongoose from "mongoose";
// const bcrypt = require('bcrypt');


const PostSchema = new mongoose.Schema(
    {
    title:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true,

    },
    photo:{
        type: String,
        required: false,

    },
},
    
   { timestamps: true }
    
);

module.exports = mongoose.model("Post", PostSchema);
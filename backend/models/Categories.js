import mongoose from "mongoose";
// const bcrypt = require('bcrypt');


const CategoriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required :true
        }
    },

    
   { timestamps: true }
    
);

module.exports = mongoose.model("Categories", CategoriesSchema);
const mongoose = require ("mongoose");


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        unique: true,
        required:[true, "entrez votre mail"],
        
    },
    password: {
        type:String,
        required:[true, "entrez votre mot de passe"],
    },

    //  timestamps: true,  
});

// userSchema.pre("save", async function (next) {
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// userSchema.statics.login = async function (email, password) {
//     const user = await this.findOne({ email });
//     if (user) {
//         const auth = await bcrypt.compare(password, user.password);
//         if (auth) {
//             return user;
//         }
//         throw "incorrect password";
//     }
//     throw 'incorrect email'
// };

module.exports  = mongoose.model("User", UserSchema);
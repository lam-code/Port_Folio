const router = require("express").Router();
const User = require ("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
// function ASYNC/Creation nouveau utilisateur+connect db+...
// req=demande que nous envoyons à notre serveur
// res= réponse  la requete demandé 
router.post("/register", async (req, res) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username: req.body.username,
            email : req.body.email,
            password : hashedPass ,
        });
        const user = await newUser.save();
            res.status(200).json(user);     
    }catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) =>{
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user && res.status(400).json("fausses références")) {
            return
        };
        

        const validate = await bcrypt.compare(req.body.password, user.password)
        if (!validate && res.status(400).json("fausses références!")) {
            return
        };
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json(err);

}});


// export du middleware
module.exports = router
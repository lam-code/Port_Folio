const express = require("express");
require("./config/db");
const authRoute = require("./routes/auth");


const app = express();
require("dotenv").config();

const port = process.env.PORT ;

// lire et recevoir format json
app.use(express.json());






app.use("/backend/auth", authRoute);

// connexion
app.listen(port, () =>{
    console.log('le serveur est connecté au port', port);
})
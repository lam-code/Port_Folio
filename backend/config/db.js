const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/myportfolio";

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 4000
  })
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.log("Impossible de se connecter à MongoDB", err));

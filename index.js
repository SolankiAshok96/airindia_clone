const express = require('express');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const apiRouter = require("./src/routes/index");
const authRouter = require("./src/routes/authRoutes")
const  {connect}  = require('./src/config/database');
const User = require('./src/models/user')

require("./src/util/auth")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/" , authRouter)
app.use("/api" , passport.authenticate('jwt', {session:false}),  apiRouter);

  
app.use(function(err,req, res, next) {
     res.status(err.status||500);
     res.json({
         success: false,
         error: err
     })
})


app.listen(8000, async () =>{
    await connect()
     console.log("Mongo db connected successfully")
     console.log("server is listening on port 8080");

   
})


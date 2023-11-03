const mongoose = require('mongoose');

const connect = () =>{
      console.log("Mongodb connection requested");
      return mongoose.connect('mongodb://127.0.0.1/airindia')
}

module.exports = {
     connect
}
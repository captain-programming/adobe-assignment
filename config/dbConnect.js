const { mongoose } = require("mongoose")
require("dotenv").config();

const dbConnect = () =>{
  return mongoose.connect(process.env.databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports=dbConnect;
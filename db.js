//Database connection:Connect mongodb with nodejs by using mongoose library
const mongoose=require('mongoose')
require("dotenv").config();
 //define mongodb connection URL
 //local database connection
//const mongourl=process.env.MONGO_DB_URL_LOCAL
//host db connection
//const mongourl='mongodb+srv://aayushi6367:6367657284@cluster0.fcon8.mongodb.net/'
const mongoURL=process.env.DB_URL;
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true}
)
//Get the default connection 
//mongoose maintains a default connection object representing the Mongodb connector

const db=mongoose.connection;

//define event listener for database connection,error,disconnected,connected are event listener keyword
db.on('connected',()=>{
    console.log('Connected to mongodb server');
})
db.on('error',(err)=>{
    console.log('Mongodb connection error',err);
})
db.on('disconnected',()=>{
    console.log('Mongodb disconnected');
})
//export db connection
module.exports=db;


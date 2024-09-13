//Database connection:Connect mongodb with nodejs by using mongoose library
const mongoose=require('mongoose')
 //define mongodb connection URL
const mongourl='mongodb://localhost:27017/Tution'
mongoose.connect(mongourl,{
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


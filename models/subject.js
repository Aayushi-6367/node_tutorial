const mongoose=require("mongoose")
const subjectschema= new mongoose.Schema({
subject:{
      type:String,
      required:true
},
    teacher:{
        type:String,
        required:true,
    

    }
})
const subject=mongoose.model('subject',subjectschema)
module.exports=subject

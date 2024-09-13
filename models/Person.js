const mongoose=require('mongoose');

//define student schema
const personSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:[
            "teacher","student","director","parents"
        ],
        reuired:true  //mandatory 
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },


})

//create person model
const Person=mongoose.model('Person',personSchema)
module.exports=Person

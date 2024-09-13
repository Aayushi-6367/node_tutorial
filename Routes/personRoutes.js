const express = require('express')  
const router=express.Router();
const Person=require('./../models/Person')

//get is a method to send request to server
router.get('/',async(req,res)=>{
    try {const data=await Person.find();
     console.log('data fetched');
 
    
     res.status(200).json(data)}
     catch(err){
         console.log(err);
         res.status(500).json({error:"Internal server error"})
     
      
 
     }
     })
     //POST route to add a person
router.post('/',async(req,res)=>{
    try{
   const data=req.body; // assuming the request body contains data

   //create new person document using mongoose model
   const NewPerson=new Person(data);




//save new person to database
const response= await NewPerson.save();
console.log("data saved")
res.status(200).json(response)}
catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"})
}
 
})


//CREATING PARAMETRIZED API
router.get('/:workType',async(req,res)=>{
    try{
    const workType= req.params.workType //EXTRACT WORKTYPE FROM URL PARAMETER
    
    //CREATE VALIDATION
    if(workType=="teacher"|| workType=="student"|| workType=="director"|| workType=="parents"){
        const response= await Person.find({work:workType})
        console.log("response fetched");
        res.status(200).json(response);

    }
    else{

        res.status(404).json({error:"Invalid work type"})
    }

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});

    }
})
  //Update records by put method
router.put('/:id',async(req,res)=>{
    try{

        const personID=req.params.id; //Extract the id from url parameter
        const updatePersondata=req.body  //updated data for person
        const response=await Person.findByIdAndUpdate(personID,updatePersondata,{
            new:true, //return updated document
            runValidators:true //run mongoose validation



        })
        if(!response){
            res.status(404).json({error:"Record not found"})
        }
        console.log("data updated")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
})  

//delete method to delete data
router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id; //extract person id from url parameter
        
        
        //assuming you have person model
        const response=await Person.findByIdAndDelete(personId)
        if(!response){
            res.status(404).json({error:"Record not found"})
        }
        console.log("data deleted")
        res.status(200).json({message:'person deleted succesfully'})



    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }

    }
)
module.exports=router;

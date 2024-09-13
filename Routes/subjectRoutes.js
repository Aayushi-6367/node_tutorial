const express = require('express')  
const router=express.Router();
const subject=require('./../models/subject')


//subject api
router.get('/',async(req,res)=>{
    try {const data=await subject.find();
     console.log('data fetched');
 
    
     res.status(200).json(data)}
     catch(err){
         console.log(err);
         res.status(500).json({error:"Internal server error"})
     
      
 
     }
     })
  

router.post('/',async(req,res)=>{
        try{
       const data=req.body; // assuming the request body contains data
    
       //create new person document usinf mongoose model
       const Newsubject=new subject(data);
    
    
    
    
    //save new person to database
    const response= await Newsubject.save();
    console.log("data saved")
    res.status(200).json(response)}
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
     
    })
 //comment adding for testing
    
 module.exports=router;

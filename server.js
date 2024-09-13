const express = require('express')  //importing js framework for making server
const app = express()  //instance ,blueprint(calling express)(it has all functionality for creating app)
// "/" is a endpoint one who write (client)slash they get the data
// we have define one end point in api which is backslash when client write backslash after address they get response
const db=require('./db')
require('dotenv').config();
//connect person model
const Person=require('./models/Person')
const subject=require('./models/subject')

const bodyParser=require('body-parser')
app.use(bodyParser.json());  //req.body

app.get('/', function (req, res) {
  res.send('Welcome to my education platform ,  How can i help you')
})

//server active at 3000 port







//IMPORT THE ROUTER FILE
const personRoutes=require('./Routes/personRoutes')
const subjectRoutes=require('./Routes/subjectRoutes')

//USE THE ROUTERS
app.use('/person',personRoutes)
app.use('/subject',subjectRoutes)


const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("Listening on port 3000");
})



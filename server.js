const express = require("express");

const app = express();


//Midddlewares

app.use(express.json());   //middleware function that parses JSON payload, if any, in the incoming API requests

app.use(express.urlencoded({ extended: false }));
 

 
// routers


const routers = require('./routes/router.js')

app.use("/api/users", routers);



// port

const PORT =  process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
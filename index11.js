const express = require('express');
const app = express();
const StudentRoute = require("./Routes/StuentRoute");
const port = 80;
app.use(express.json());

// const {index,show,store,update,destory} = require("./Controller/StudentController");


app.use("/Student",StudentRoute);

// app.get("/",(req,res)=>{
//     res.send(`Hello, Welcome to atmiya university`);
// })

app.listen(80, () =>{
    console.log(`Server is running at http://localhost:${port}/`);

});
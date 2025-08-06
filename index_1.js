const express = require("express")
const app = express();

app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send('Hello Welcome to atmiya university');
// });

// app.get("/home",(req,res)=>{
//     res.send('Home Page');
// });

// app.listen(80,()=>{
//     console.log("Server is running at http://localhost:80/");
// });

// index route
app.get("/",(req,res)=>{
    res.send("All Student");
});


app.get("/show/:id",(req,res)=>{
    // res.send("One studnet");
    res.send(`show studnet with ID:${req.params.id}`);
});


app.post("/store",(req,res)=>{
    // res.send("Create a new student");
    res.send(`insert ${req.body.name},${req.body.city}\n`);
});

app.put("/update/:id",(req,res)=>{
    // res.send("Update a studnet"); 
    res.send(`update ${req.params.id} ${req.body.name},${req.body.city}`);
});

app.delete("/delete/:id",(req,res)=>{
    res.send("Delete a student");
})

app.listen(404,()=>{
    console.log("Server is running at http://localhost:404/");
});


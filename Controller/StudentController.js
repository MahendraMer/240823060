exports.index = (req,res)=>{
    res.send("Welcome to the M.C.A Student API");
};

exports.show = (req,res)=>{
    res.send(`Show Data For Id:${req.params.id}`);
};

exports.store = (req,res)=>{
    res.send(`Data received: ${req.body.name},${req.body.city}`);
};

exports.update = (req,res) =>{
    res.send(`Data Updated For ID:${req.params.id}, Name: ${req.body.name},city:${req.boyd.city}`);
};

exports.delete = (req,res) =>{
    res.send(`Data deleted for ID:${req.params.id}`);

};
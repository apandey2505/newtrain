const express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send("hhhh");
});


app.listen(3000,()=> {
    console.log("server running");
});




--------------------------

const express = require('express');
const app = express();
const port = 1947;

function requestHandler(req, res){
    console.log(`req`);
    res.end(`mera to ho gya`);
}

app.listen(port, function(err){
    if(err){
        console.log(`Error in Running the Server: ${err}`);
    }
    console.log(`Server is Running on Port : ${port}`);
});
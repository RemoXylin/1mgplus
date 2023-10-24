const express = require('express');
const app = express();
const port = 1947;

//USE EXPRESS ROUTER
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in Running the Server: ${err}`);
    }
    console.log(`Server is Running on Port : ${port}`);
});
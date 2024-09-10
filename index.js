const express = require('express');
const employee = require('./route/employee');
const app= express();
app.use(employee);


app.listen(3000,(err)=>{
    if(err) console.log(err);
    console.log('server is running on port 3000');
})
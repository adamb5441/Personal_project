const express = require('express');
const bodyparser = require ('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();
const controller = require('./controller');
    massive(process.env.CONNECTION_STRING).then(dbInstance =>{
        app.set('db', dbInstance)
    })


app.use(bodyparser.json());
console.log("you are in the server")
app.get('/api/Plans', controller.getAll);
// app.delete('/api/plans/delete/:id', controller.delete);


const port = process.env.port || 4000;

app.listen(port,()=>{console.log(`The machine god exepts your sacrifice ${port}`)})
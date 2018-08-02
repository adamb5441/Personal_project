const express = require('express');
const bodyparser = require ('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();
const controller = require('./controller');



app.use(bodyparser.json());
console.log("you are in the server")
app.get('/api/Plans', controller.getAll);
app.delete('/api/plans/delete/:id', controller.delete);
app.post('/api/plans/create', controller.create)
app.put('/api/plans/update', controller.update);
const port = process.env.port || 4000;
massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    app.listen(port,()=>{console.log(`The machine god exepts your sacrifice ${port}`)})
})
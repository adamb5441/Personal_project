const express = require('express');
const bodyparser = require ('body-parser');
const massive = require('massive');
const session = require('express-session')
const axios = require('axios')
require('dotenv').config();
const app = express();
const controller = require('./controller');
const path = require('path'); 
const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    SESSION_SECRET,
    CONNECTION_STRING
  } = process.env;
  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyparser.json());
app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false
    })
  ); 

const port = process.env.port || 4000;
massive(CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance)
    app.listen(port,()=>{console.log(`The machine god exepts your sacrifice ${port}`)})
})


app.get('/auth/callback', async (req,res)=>{
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)


    let resWithUserData= await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`);

    const db = req.app.get('db');   
     let {sub, email, name, picture} = resWithUserData.data;
    let userFound = await db.findUser([sub]);
    if(userFound[0]){
        req.session.user = userFound[0]
        res.redirect('/#/Dashboard/Trips');
    }else {
        let createdUser= await db.createUser([sub, email, name, picture]);
        req.session.user = createdUser[0];
        res.redirect('/#/Dashboard/Trips');
    }
})

app.get('/api/Plans/:id', controller.getPlans);
app.delete('/api/plans/delete/:id', controller.deletePlans);
app.post('/api/plans/create', controller.createPlans);
app.put('/api/plans/update', controller.updatePlans);
app.get('/api/user-data', controller.userData);
app.get('/api/Trips/:id', controller.getTrips);
app.post('/api/Trips/create', controller.createTrips);
app.delete('/api/Trips/delete/:id', controller.deleteTrips);
app.get('/api/save-data', controller.saveData);
app.post('/api/set-save/:id', controller.setSave);
app.get('/api/dates/:id', controller.getDates);
app.post('/api/dates/create', controller.createDates);
app.delete('/api/dates/delete/:id', controller.deleteDates);
module.exports={
    userData:(req, res) => {
        if (req.session.user) {
          res.status(200).send(req.session.user);
        } else {
          res.status(401).send('Get out');
        }
      },
    saveData:(req, res) => {
        if (req.session.saves) {
          res.status(200).send(req.session.saves);
        } else {
          res.status(401).send('Get out');
        }
      },
    getPlans:(req,res,next) =>{
        const dbInstance=req.app.get('db');
        dbInstance.getPlans()
        .then( data => res.status(200).send(data))
        .catch(err => {res.status(500).send({errorMessage: "YOU SHALL NOT PASS!!!!!!!!"})
        console.log(err)})

    },
    deletePlans:(req,res,next) =>{
        const {params}=req
        const dbInstance= req.app.get('db')
        dbInstance.deletePlans([params.id])
        .then( data => res.status(200).send(data.plan_id))
        .catch(err => {res.status(500).send({errorMessage: "can't touch this"})
        console.log(err)})
    },
        createPlans:(req,res,next) =>{
        const {str, num}=req.body
        const dbInstance= req.app.get('db')
        dbInstance.createPlans([str, num])
        .then( data => res.status(200).send(data))
        .catch(err => {res.status(500).send({errorMessage: "denied"})
        console.log(err)})
    },
    updatePlans:(req,res,next) =>{
        const {val, num}=req.body
        const dbInstance= req.app.get('db')
        console.log(val, num);
        dbInstance.updatePlans([val, num])
        .then( data => res.status(200).send(data))
        .catch(err => {res.status(500).send({errorMessage: "can't touch this"})
        console.log(err)})
    },
    getTrips:(req,res,next) =>{
        const {params} = req;
        console.log(params.id + " in the controller")
        const dbInstance=req.app.get('db');
        dbInstance.getTrips([params.id])
        .then(data =>{
            req.session.saves = data
            res.status(200).send(data)})
        .catch(err => {res.status(500).send({errorMessage: "Nope"})
        console.log(err)})
    
        },
    deleteTrips:(req,res,next) =>{
        const {params}=req
        const dbInstance= req.app.get('db')
        dbInstance.deleteTrips([params.id])
        .then( data => res.status(200).send(data.plan_id))
        .catch(err => {res.status(500).send({errorMessage: "ooop"})
        console.log(err)})
        },
    createTrips:(req,res,next) =>{
        console.log(req.body)
        const {str, num}=req.body
        const dbInstance= req.app.get('db')
        dbInstance.createTrips([str, num])
        .then( data => res.status(200).send(data))
        .catch(err => {res.status(500).send({errorMessage: "pfff"})
        console.log(err)})
        }

}
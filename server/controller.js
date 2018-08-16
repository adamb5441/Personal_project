module.exports={
    userData:(req, res) => {
        if (req.session.user) {
          res.status(200).send(req.session.user);
        } else {
          res.status(401).send('Get out');
        }
      },
    setSave:(req,res) => {
        const {params} = req;
        req.session.saves = params;
        res.status(200).send(req.session.saves)
      },
    saveData:(req, res) => {
        if (req.session.saves) {
          res.status(200).send(req.session.saves);
        } else {
          res.status(401).send('Get out');
        }
      },
    getPlans:(req,res,next) =>{
        const {params}=req;
        const dbInstance=req.app.get('db');
        dbInstance.getPlans([params.id])
        .then( data => res.status(200).send(data))
        .catch(err => {res.status(500).send({errorMessage: "YOU SHALL NOT PASS!!!!!!!!"})
        console.log(err)})

    },
    deletePlans:(req,res,next) =>{
        const {params}=req
        const dbInstance= req.app.get('db')
        console.log('delete')
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
        console.log(params.id + " get")
        const dbInstance=req.app.get('db');
        dbInstance.getTrips([params.id])
        .then(data =>{
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
        const {str, img, num}=req.body
        const dbInstance= req.app.get('db')
        dbInstance.createTrips([str, img, num])
        .then( data => res.status(200).send(data))
        .catch(err => {res.status(500).send({errorMessage: "pfff"})
        console.log(err)})
        },    
    getDates:(req,res,next) =>{
            const {params}=req;
            const dbInstance=req.app.get('db');
            dbInstance.getDates([params.id])
            .then( data => res.status(200).send(data))
            .catch(err => {res.status(500).send({errorMessage: "wamp waaa"})
            console.log(err)})
    
        },
    createDates:(req,res,next) =>{
            const {startDate, endDate, title, saveNum}=req.body
            const dbInstance= req.app.get('db')
            dbInstance.createDates([startDate, endDate, title, saveNum])
            .then( data => res.status(200).send(data))
            .catch(err => {res.status(500).send({errorMessage: "error...error"})
            console.log(err)})
            },
    deleteDates:(req,res,next) =>{
        const {params}=req
        const dbInstance= req.app.get('db')
        dbInstance.deleteDates([params.id])
        .then( data => res.status(200).send(data.plan_id))
        .catch(err => {res.status(500).send({errorMessage: "ooof"})
        console.log(err)})
        }    

}
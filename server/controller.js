module.exports={

    getAll:(req,res,next) =>{
    const dbInstance=req.app.get('db');
    dbInstance.getPlans()
    .then( data => res.status(200).send(data))
    .catch(err => {res.status(500).send({errorMessage: "YOU SHALL NOT PASS!!!!!!!!"})
    console.log(err)})

    },
    delete:(req,res,next) =>{
    const {params}=req
    const dbInstance= req.app.get('db')
    dbInstance.deletePlans([params.id])
    .then( data => res.status(200).send(data.plan_id))
    .catch(err => {res.status(500).send({errorMessage: "can't touch this"})
    console.log(err)})
    },
    create:(req,res,next) =>{
    console.log(req.body)
    const {str, num}=req.body
    const dbInstance= req.app.get('db')
    dbInstance.createPlans([str, num])
    .then( data => res.status(200).send(data))
    .catch(err => {res.status(500).send({errorMessage: "denied"})
    console.log(err)})
    },
    update:(req,res,next) =>{
     const {val, num}=req.body
    const dbInstance= req.app.get('db')
    console.log(val, num);
    dbInstance.updatePlans([val, num])
    .then( data => res.status(200).send(data))
    .catch(err => {res.status(500).send({errorMessage: "can't touch this"})
    console.log(err)})
    }


}
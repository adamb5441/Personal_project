module.exports={

    getAll:(req,res,next) =>{
        const dbInstance=req.app.get('db');
        dbInstance.getPlans()
        .then( data => res.status(200).send(data))
        .catch(err => {res.status(500).send({errorMessage: "YOU SHALL NOT PASS!!!!!!!!"})
    console.log(err)})

    }
    // delete:(req,res,next) =>{
    //     const {params}=req
    // const dbInstance= req.app.get('db')
    // dbInstance.deletePlans([params.id])
    // .then( data => res.status(200).send("aaaaand it gone"))
    // .catch(err => {res.status(500).send({errorMessage: "can't touch this"})
    // console.log(err)})
    // }


}
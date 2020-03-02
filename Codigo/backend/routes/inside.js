const router = require('express').Router();
const User = require("../models/User")
const Property = require("../models/Property")

router.get("/owner", async (req, res, next)=>{
    const {auth} = req.headers
    const data = await User.findById(auth)
    res.json(data)
})
router.get("/tennant", async (req, res, next)=>{
    const {auth} = req.headers
    let data = await User.findById(auth)
    if (!data) {
        res.status(400).json({err: "no user found"} )
        return
    }

    const property = await Property.findById(data.tenpropId)
    if (!property) {
        res.status(400).json({err: "no property found"} )
        return
    }
const result = {
    name: data.name,
    email: data.email,
    property: property
}


    res.json(result)
})

router.post("/property", async (req, res, next)=>{
    const {data} = req.body
    const newprop = await Property.create(data)
    res.json(newprop)
})
router.get("/property", async (req, res, next) =>{
    const {auth} = req.headers
    const prop = await Property.find({owner: auth}).sort({createdAt:-1})
    res.json(prop)
})



module.exports = router

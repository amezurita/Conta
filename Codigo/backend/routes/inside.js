const router = require('express').Router();
const User = require("../models/User")
const Property = require("../models/Property")

router.get("/owner", async (req, res, next)=>{
    const {auth} = req.headers
    const data = await User.findById(auth)
    res.json(data)
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

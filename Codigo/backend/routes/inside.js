const router = require('express').Router();

const User = require("../models/User")
const Property = require("../models/Property")
const Payments = require("../models/Payment")

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
    const data = req.body
    data.owner = req.headers.auth

    const newprop = await Property.create(data)

    console.log(newprop, 'new prop')

    res.json(newprop)
})
router.get("/property", async (req, res, next) =>{
    const {auth} = req.headers
    const properties = await Property.find({owner: auth}).sort({createdAt:-1})

    let result = [];
    for(let property of properties) {
        const tennant = await User.findOne({ tenpropId: property._id })
        const payments = await Payments.find({ property: property._id })

        result.push({
            ...property._doc,
            tennant,
            payments
        })
    }

    res.json(result)
})

router.post("/profile", async (req, res, next)=>{
    const {data} = req.body
    res.json(auth)
})

router.post("/payment", async (req, res) => {
    const data = req.body;

    const result = await Payments.create(data)

    res.json(result)
})

router.post("/payment-done", async (req, res) => {
    const { payment_id } = req.body;

    const payment = await Payments.findById(payment_id)

    payment.isPaid = true;

    await payment.save()

    res.json(payment)
})

module.exports = router

const router = require('express').Router();
const User = require("../models/User")

router.get("/owner", async (req, res, next)=>{
    const {auth} = req.headers
    const data = await User.findById(auth)
    res.json(data)
})

module.exports = router

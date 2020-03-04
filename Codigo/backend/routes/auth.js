const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Property = require("../models/Property")
const Payments = require("../models/Payment")

const passport = require('../config/passport');

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({
      id: user._id
    }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), async (req, res, next) => {
  const { user } = req;

  const response = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  if(response.role === 'tennant') {
    response.property_id = user.tenpropId || 1;
    response.property = await Property.findById(response.property_id)
    response.payments = await Payments.find({ property: response.property_id })
  }

  res.status(200).json({ response });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;


// const express = require('express')
// const router = express.Router()
// const User = require('../models/User')
// const passport = require('../config/passport')
// const uploadCloud = require('../config/cloudinary')

// router.post('/signup', (req, res, next) => {
//   User.register(req.body, req.body.password)
  
//     .then(user => res.status(201).json({ user }))
//     .catch(err => res.status(500).json({ err }))
// })

// router.post(
//   '/login',
//   passport.authenticate('local'),
//   async (req, res, next) => {
//     const { _id } = req.user
//     const user = await User.findById(_id).populate({
//       path: 'memes',
//       populate: {
//         path: 'author',
//         model: 'User'
//       }
//     })
//     res.status(200).json({ user })
//   }
// )

// router.get('/logout', (req, res, next) => {
//   req.logout()
//   res.status(200).json({ msg: 'Logged out' })
// })

// router.get('/profile', isAuth, (req, res, next) => {
//   User.findById(req.user._id)
//     .populate('memes')
//     .then(user => res.status(200).json({ user }))
//     .catch(err => res.status(500).json({ err }))
// })

// router.post(
//   '/upload',
//   isAuth,
//   uploadCloud.single('photoURL'),
//   async (req, res, next) => {
//     const { secure_url } = req.file
//     const user = await User.findByIdAndUpdate(
//       req.user._id,
//       { photoURL: secure_url },
//       { new: true }
//     )
//     res.status(200).json({ user })
//   }
// )

// router.post('/create', isAuth, async (req, res, next) => {
//   const { tags, name, photoURL } = req.body
//   const { _id } = req.user
//   const meme = await Meme.create({ name, photoURL, tags, author: _id })
//   const memePopulated = await Meme.findById(meme._id).populate('author')
//   const user = await User.findByIdAndUpdate(
//     _id,
//     { $push: { memes: meme._id } },
//     { new: true }
//   ).populate({
//     path: 'memes',
//     populate: {
//       path: 'author',
//       model: 'User'
//     }
//   })
//   return res.status(201).json({ user, meme: memePopulated })
// })

// router.get('/memes', async (req, res, next) => {
//   const memes = await Meme.find()
//     .sort({ createdAt: -1 })
//     .populate('author')
//   res.status(200).json({ memes })
// })

// function isAuth(req, res, next) {
//   req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
// }


// module.exports = router
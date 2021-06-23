const express =require('express');
const router = express.Router();
const db = require("../models");

// Create Profile
router.post('/NewProfile', (req, res) => {
    db.Profile.create({
        name : req.body.name,
        UserId : req.body.UserId
    }).then(X => res.send(X))
})
// Get One profil
router.get('/getOneProfile/:id', (req, res) => {
    db.Profile.findAll({
        where : {
            UserId : req.params.id
        }
    }).then(X => res.send(X))
})

// Get ALL Profiles
router.get('/getAllProfile', (req, res) => {
    db.Profile.findAll({
    }).then(X => res.send(X))
})




module.exports = router ;
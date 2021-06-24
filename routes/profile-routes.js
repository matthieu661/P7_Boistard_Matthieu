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
// Get One profile
router.get('/getOneProfile/:id', (req, res) => {
    db.Profile.findAll({
        where : {
            UserId : req.params.id
        },
        include : [ db.User, db.User]
    }).then(X => res.send(X))
})
// Get ALL Profiles
router.get('/getAllProfile', (req, res) => {
    db.Profile.findAll({
    }).then(X => res.send(X))
})
// Delete Profile
router.delete("/deleteProfile/:id", (req, res) => {
    db.Profile.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send('Post est Mort --> †††'))
})
// MODIFY Post 
router.put("/modifyProfile", (req, res) => {
    db.Profile.update(
        {
            name: req.body.name
        },
        {
            where: {
                id : req.body.id

            }
        }).then(() => res.send("Ton Post à changé de style"));
})




module.exports = router ;
const express =require('express');
const router = express.Router();
const db = require("../models");


// CREATE USER
router.post('/new', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(NewUser => res.send(NewUser));
});
// GET ALL USER 

router.get('/getAll/minInfo', (req, res) => {
    db.User.findAll({
    }).then(x => res.send(x));
});
router.get('/getAll/maxInfo', (req, res) => {
    db.User.findAll({
        include : { model : db.Profile } // passe en mode object --> demain test autrement ! 
    }).then(allUsers => res.send(allUsers));
});




// GET ONE USER
router.post('/getOne', (req, res) => {
    db.User.findAll({
    }).then(x => res.send(x));
});
// MODIFY USER
router.post('/Modify', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => res.send(newUser));
});
// DELETE USER
router.post('/Delete', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(newUser => res.send(newUser));
});




module.exports = router ;
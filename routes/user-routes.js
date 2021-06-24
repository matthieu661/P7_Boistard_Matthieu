const express = require('express');
const router = express.Router();
const db = require("../models");


// CREATE USER
router.post('/new', (req, res) => {
    db.User.create({
        username: req.body.username
    }).then(X => res.send(X));
});

// GET ALL USER 
router.get('/getAll/minInfo', (req, res) => {
    db.User.findAll({
    }).then(x => res.send(x));
});
router.get('/getAll/maxInfo', (req, res) => {
    db.User.findAll({
        include: [db.Profile, db.Post]
    }).then(X => res.send(X));
});

// GET ONE USER ADMIN
router.get('/getOneUser/:username', (req, res) => {
    db.User.findAll({
        where: {
            username: req.params.username
        },
        include: [db.Profile, db.Post]
    }).then(X => res.send(X))
})

// MODIFY USER
router.put('/ModifyUser/:id', (req, res) => {
    db.User.update({
        username: req.body.username
    },
        {
            where: {
                id: req.params.id

            }
        }).then(newUser => res.send(newUser));
});
// DELETE USER
router.delete('/deleteUser/:id', (req, res) => {
    /*db.Post.destroy({
        where: {
            UserId: req.params.id
        },
        include: [db.User]
    }).then(X => res.sendStatus(201));

        db.Profile.destroy({
            where: {
                UserId: req.params.id
            },
            include: [db.User]
        }).then(X => res.sendStatus(201)
        )*/
        db.User.destroy({
            where: {
                id: req.params.id
            },
            force : true
        }).then(x => res.send(x + "Ciao Bella"));
});




module.exports = router;
const express =require('express');
const router = express.Router();
const db = require("../models");

// Create Post
router.post('/NewPost', (req, res) => {
    db.Post.create({
        text : req.body.text,
        UserId : req.body.UserId
    }).then(X => res.send(X))
})
// Get One user Allpost  ADMIN
router.get('/getOnePost/:id', (req, res) => {
    db.Post.findAll({
        where : {
            UserId : req.params.id
        },
        include : [ db.User ]
    }).then(X => res.send(X))
})
// Get ALL Post
router.get('/getAllPost', (req, res) => {
    db.Post.findAll({
    }).then(X => res.send(X))
})
// Delete Post
router.delete("/deletePost/:id", (req, res) => {
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send('Post est Mort --> †††'))
})
// MODIFY Post 
router.put("/modifyPost", (req, res) => {
    db.Post.update(
        {
            text: req.body.text
        },
        {
            where: {
                id : req.body.id

            }
        }).then(() => res.send("Ton Post à changé de style"));
})



module.exports = router ;
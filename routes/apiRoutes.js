const express = require('express'); // autoconvertion vers ES6
const router = express.Router();
const db = require("../models");

//GET ALL
router.get("/all", (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
});
// CREATE ONE
router.post("/new", (req, res) => {
    db.Todo.create({
        text: req.body.text,
    }).then(X => res.send(X));
});
//  GET ONE
router.get("/find/:id", (req, res) => {
    db.Todo.findAll({
        where: {
            id: req.params.id
        }
    }).then(X => res.send(X));
})
// DELETE ONE 
router.delete("/delete/:id", (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send('todo est mort !'))
})
// MODIFY ONE 
router.put("/modify", (req, res) => {
    db.Todo.update(
        {
            text: req.body.text
        },
        {
            where: {
                id : req.body.id

            }
        }).then(() => res.send("todo à changé de style"));
})

module.exports = router;
const express = require('express'); // autoconvertion vers ES6
const router = express.Router();
const db = require("../models/index");


router.get("/all", (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
} );

module.exports = router; 
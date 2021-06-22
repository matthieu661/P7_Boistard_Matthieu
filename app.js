const express = require('express');



const app = express();

// utilitaire object

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes const :
// route use :
// route test :
const apiRoutes = require('./routes/apiRoutes');
app.use("/api", apiRoutes);






module.exports = app;
const express = require('express');



const app = express();

// utilitaire object

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes const :
const userRoutes = require('./routes/user-routes');
const profileRoutes = require('./routes/profile-routes')
const postRoutes = require('./routes/post-routes')
// route use :
app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/posts", postRoutes)
// route test :
const apiRoutes = require('./routes/apiRoutes');
app.use("/api", apiRoutes);






module.exports = app;
const express = require('express');


const app = express();


// routes const :
// route use :
// route test :
const apiRoutes = require('./routes/apiRoutes');
app.use("/api", apiRoutes);


/*le premier enregistre « Requête reçue ! »
 dans la console et passe l'exécution ;*/
app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});
/*le deuxième ajoute un code d'état 201 à la réponse
 et passe l'exécution ;*/
app.use((req, res, next) => {
  res.status(201);
  next();
});
/*le troisième envoie la réponse JSON et passe l'exécution ;*/
app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});
/*le dernier élément de middleware enregistre
 « Réponse envoyée avec succès ! » dans la console.*/
app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;
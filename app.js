const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerProducts = require('./router/produit');


mongoose.connect('mongodb+srv://design:root@expressapi.zzncuif.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('Connexion Successfull');
}).catch((error) => {
    console.log(error);
})

//
app.use(bodyParser.json());

//A ce chemin  on peut utiliser la route routerProducts 
app.use('/api/products/', routerProducts);

module.exports = app;
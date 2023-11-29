const mongoose = require('mongoose');
const express = require('express');
const routerUser = require('./routes/usersRoute');
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/api',routerUser);

app.listen(2100,() => {
    console.log('Le port 2100 est prêt a recevoir vos requêtes');
})
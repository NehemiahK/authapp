const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup'); // when server starts passport will setup
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// view engine 
app.set('view engine','ejs');

//connect to mongodb
mongoose.connect(keys.monogodb.dbURI,{ useNewUrlParser: true }, ()=>{
    console.log('connected to mongodb');
});

//middleware for using routes 
app.use('/auth', authRoutes);

app.get('/', (req,res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app listening for requests on port 3000');
})
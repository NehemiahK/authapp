const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup'); // when server starts passport will setup

const app = express();

// view engine 
app.set('view engine','ejs');

//middleware for using routes 
app.use('/auth', authRoutes);

app.get('/', (req,res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app listening for requests on port 3000');
})
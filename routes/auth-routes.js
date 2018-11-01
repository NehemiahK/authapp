const router = require('express').Router(); // instance of router 
const passport = require('passport');

//auth login 
router.get('/login', (req,res) => {
    res.render('login'); // render login page 
});

//auth logout
router.get('/logout', (req,res) => {
    // handle with passport 
    res.send('logging out'); 
})

// auth with google 
router.get('/google', passport.authenticate('google', {
    scope:['profile']
}));

// callback route for google to redirect to, use middleware to grab info
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
    res.send('you reached call back uri');
})
module.exports = router; 
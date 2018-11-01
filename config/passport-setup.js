const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

//attach google strat to passport
passport.use(
    new GoogleStrategy({
    //options for google strat
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    //passport callback function 
    console.log('passport callback function fired');
    console.log(profile);
})
)
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports = module.exports = function(passport, config, authentication, models) {
    passport.serializeUser(function(user, done) {
        done(null, user.id); // this is what gets attached to the session
    });

    passport.deserializeUser(function(id, done) {
        models.User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new FacebookStrategy({
        clientID: config.get('facebook.client.id'),
        clientSecret: config.get('facebook.client.secret'),
        callbackURL: config.get('facebook.callback.url'),
        passReqToCallback: true
    }, authentication.facebook.auth));

    passport.use(new GoogleStrategy({
        clientID: config.get('google.client.id'),
        clientSecret: config.get('google.client.secret'),
        callbackURL: config.get('google.callback.url'),
        passReqToCallback: true
    }, authentication.google.auth));
};

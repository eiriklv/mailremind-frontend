exports = module.exports = function(passport) {
    return function(req, res, next) {
        passport.authenticate('instagram', {
            successRedirect: req.session.redirect || '/',
            failureRedirect: req.session.redirect || '/',
            failureFlash: true // allow flash message
        })(req, res, next);
    };
};

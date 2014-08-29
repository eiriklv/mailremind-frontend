exports = module.exports = function(passport) {
    return function(req, res, next) {
        req.session.redirect = undefined;

        passport.authenticate('instagram')(req, res, next);
    };
};

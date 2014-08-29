exports = module.exports = function(models, mailer) {
    return {
        facebook: require('./facebook')(models, mailer),
        google: require('./google')(models, mailer)
    };
};

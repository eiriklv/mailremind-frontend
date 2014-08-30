exports = module.exports = function(mongoose, validators) {
    return {
        User: require('./user')('User', mongoose, validators),
        Message: require('./message')('Message', mongoose, validators)
    };
};

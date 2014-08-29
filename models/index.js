exports = module.exports = function(mongoose, validators) {
    return {
        User: require('./user')('user', mongoose, validators),
        Resource: require('./resource')('resource', mongoose, validators),
        Comment: require('./comment')('comment', mongoose)
    };
};

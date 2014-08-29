exports = module.exports = function(service) {
    return {
        facebook: require('./facebook')(service),
        google: require('./google')(service)
    };
};

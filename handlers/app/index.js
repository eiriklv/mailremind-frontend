exports = module.exports = function(services, helpers) {
    return {
        landing: require('./landing')(),
        home: require('./home')(services, helpers),
        logout: require('./logout')(services)
    };
};

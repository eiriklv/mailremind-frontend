var request = require('superagent');

exports = module.exports = function(config) {
    return {
        reminder: require('./reminder')(request, config.api.url + '/reminder')
    };
};

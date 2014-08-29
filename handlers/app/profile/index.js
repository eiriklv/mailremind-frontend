var nodejsx = require('node-jsx').install();
var App = require('../../../client/javascript/profile');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'Profile page',
            description: 'React profile page',
            user: req.user.toObject(),
            messages: req.flash()
        };

        helpers.react.renderMarkupToString({
            component: App,
            clientScripts: ['/javascript/profile.js'],
            context: context,
            staticPage: false,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};

var App = require('../../../client/javascript/home');

exports = module.exports = function(services, helpers) {
    return function(req, res, next) {
        var context = {
            title: 'MailRemind.me',
            description: 'Schedule reminders to be sent to your email',
            user: req.user,
            messages: req.flash(),
            startTime: new Date()
        };

        helpers.react.renderMarkupToString({
            component: App,
            clientScripts: ['/javascript/home.js'],
            context: context,
            staticPage: false,
            callback: function(err, markup) {
                if (err) return next(err);
                res.send(markup);
            }
        });
    };
};

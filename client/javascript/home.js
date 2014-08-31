/**
 * @jsx React.DOM
 */
'use strict';

// config
var config = require('./config');
var api = require('./modules/api')(config);

// dependencies
var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');
var io = require('socket.io-client');
var sockets = require('./modules/sockets/home');

// common components
var Head = require('./modules/components/common/head');
var Header = require('./modules/components/common/header');
var ClientScripts = require('./modules/components/common/client-scripts');

// custom components
var TodoApp = require('./modules/components/todo-app');
var Time = require('./modules/components/time');

var App = React.createClass({

    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function(callback) {
        callback(null, this.props); // set the input props as state (equal to 'return this.props' in getInitialState, but async)
    },

    componentDidMount: function() {
        // intialize socket.io
        sockets(io);
    },

    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description} />

                <body id="home">
                    <Header user={this.state.user} />

                    <div className="container">
                        <div className="jumbotron text-center">
                            <h1>{this.state.title}</h1>
                        </div>
                    </div>

                    <div className="MainPage container">
                        <Time startTime={this.state.startTime} />

                        <TodoApp
                            type='focus'
                            title='FOCUS AREAS'
                            skin='success'
                            placeholder='What do you need to focus on?'
                        />
                    </div>

                    <ClientScripts />
                </body>
            </html>
        );
    }
});

module.exports = App;

if (typeof window !== 'undefined') {
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(App(), document);
    }
}

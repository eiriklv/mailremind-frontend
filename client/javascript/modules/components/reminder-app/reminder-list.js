/** @jsx React.DOM */

'use strict';

var React = require('react');

// sub-components
var ReminderItem = require('./reminder-item');

module.exports = React.createClass({
    displayName: 'ReminderList',

    render: function () {
        var count = 0;

        var createItem = function (item) {
            return (
                <ReminderItem
                    handleComplete={this.props.handleComplete}
                    key={item.id}
                    text={item.text}
                    complete={item.complete}
                />
            );
        }.bind(this);

        return (
            <ul className='list-group'>
                {this.props.items.map(createItem)}
            </ul>
        );
    }
});

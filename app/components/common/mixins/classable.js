/**
 * Created by hongyu.feng on 2015/4/29.
 */
var React = require('react');
var classNames = require('classnames');
module.exports = {
    propTypes: {
        className: React.PropTypes.string
    },


    getClasses: function (initialClasses, additionalClassObj) {
        var classString = '';

        if (this.props.className.length) {
            classString += ' ' + this.props.className;
        }

        if (typeof initialClasses === 'object') {
            classString += ' ' + classNames(initialClasses);
        } else {
            classString += ' ' + initialClasses;
        }

        if (additionalClassObj) {
            classString += ' ' + classNames(additionalClassObj);
        }

        return classString.trim();
    }
}

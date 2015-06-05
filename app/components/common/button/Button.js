var React = require('react/addons');
var PropTypes = React.PropTypes;
var classable = require('../mixins/classable');
module.exports = React.createClass({
    displayName: "Button",

    mixins: [classable],

    propTypes: {
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        disabledClassName: PropTypes.string

    },

    getDefaultProps: function() {
        return {
            disabled: false,
            className:"button-primary"
        }
    },
    render: function() {
        return (<button {...this.props} >{this.props.children}</button>);
    }
});

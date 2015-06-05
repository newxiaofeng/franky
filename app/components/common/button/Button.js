var React = require('react/addons');
var PropTypes = React.PropTypes;
module.exports = React.createClass({
    displayName: "Button",
    propTypes: {
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        disabledClassName: PropTypes.string

    },

    getDefaultProps: function() {
        var self = this;
        return {
            onClick: function() {
                console.log('click');
            },
            disabled: false,
            className:"button-primary"
        }
    },
    render: function() {
        console.log(this.props);
        return (<button {...this.props} >{this.props.children}</button>);
    }
});

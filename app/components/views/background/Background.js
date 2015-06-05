var React = require('react/addons');
var classable = require('../../common/mixins/classable');
module.exports = React.createClass({
    displayName: "Background",
    mixins: [],
    getDefaultProps: function() {
        return {
            className: 'background'
        }
    },
    render: function() {
        return (
            <div {...this.props}></div>
        );
    }
});

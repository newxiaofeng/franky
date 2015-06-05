var React = require('react/addons');

module.exports = React.createClass({
    displayName: "Background",
    render: function() {
        return (
            <div {...this.props} className="background"></div>
        );
    }
});

var React = require('react/addons');
require('./homePage.less');
var style = {
    height: window.innerHeight,
    width: window.innerWidth
}
module.exports = React.createClass({
    displayName: "homePage",
    render: function() {
        return (
            <div>
                <ul id="scene" style={style} className="scene">
                    <li className="layer" data-depth="1.00"></li>
                    <li className="layer" data-depth="0.80"></li>
                    <li className="layer" data-depth="0.60"></li>
                    <li className="layer" data-depth="0.40"></li>
                    <li className="layer" data-depth="0.20"></li>
                    <li className="layer" data-depth="0.00"></li>
                </ul>
            </div>
        );
    }
});
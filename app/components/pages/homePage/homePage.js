var React = require('react/addons');
require('./homePage.less');
var Background = require('../../views/background/Background');

module.exports = React.createClass({
    displayName: "HomePage",
    getInitialState: function() {
        return {
            style: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        }
    },
    setStyle: function(e, style) {
        if(!style) {
            style = {
                height: window.innerHeight,
                width: window.innerWidth
            }
        }
        this.setState({
            style: style
        })

    },
    componentWillMount: function() {
        window.addEventListener('resize', this.setStyle);
        window.addEventListener('deviceorientation', this.setStyle);
    },
    render: function() {
        return (
            <div className="wrapper">
                <ul id="scene" style={this.state.style} className="scene">
                    <li className="layer" data-depth="0.20">
                        <Background></Background>
                    </li>
                    <li className="layer" data-depth="0.40"></li>
                    <li className="layer" data-depth="0.60"></li>
                    <li className="layer" data-depth="0.80"></li>
                    <li className="layer" data-depth="1"></li>
                </ul>
            </div>
        );
    }
});
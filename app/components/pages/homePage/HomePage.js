var React = require('react/addons');
var Router = require('react-router');
require('./homePage.less');
var Background = require('../../views/background/Background');
var List = require('../../views/list/List');
var classable = require('../../common/mixins/classable');
var Link = Router.Link;
module.exports = React.createClass({
    displayName: "HomePage",
    mixins: [classable],
    propTypes: {
        isParallax: React.PropTypes.bool,
        className: React.PropTypes.string
    },
    getInitialState: function() {
        return {
            style: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        }
    },
    getDefaultProps: function() {
        return {
            isParallax: true
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
    parallaxOnceInit: function() {
        var scene = document.getElementById('scene');
        new Parallax(scene);
        window.addEventListener('resize', this.setStyle);
        window.addEventListener('deviceorientation', this.setStyle);

    },
    componentWillUnmount: function() {
        window.removeEventListener('resize', this.setStyle);
        window.removeEventListener('deviceorientation', this.setStyle);
    },


    componentDidMount: function() {
        if(this.props.isParallax) {
            this.parallaxOnceInit();
        }
    },

    render: function() {
        return (
            <div className="wrapper">
                <ul id="scene" style={this.state.style} className="scene">
                    <li className="layer" data-depth="0.20">
                        <Background></Background>
                    </li>
                    <li className="layer" data-depth="0.40">
                        <i className="white-star"></i>
                    </li>
                    <li className="layer" data-depth="0.6">
                        <i className="star"></i>
                    </li>
                    <li className="layer" data-depth="0.80">
                        <i className="blue-star"></i>
                    </li>
                    <li className="layer" data-depth="1">
                        <i className="yellow-star"></i>
                    </li>
                    <li className="layer">
                        <List isVerticalMiddle={true}>
                            <Link className="list-element" to="/component">组件</Link>
                            <Link className="list-element" to="/page2">page build</Link>
                            <Link className="list-element" to="/publish">热发</Link>
                        </List>
                    </li>
                </ul>
            </div>
        );
    }
});

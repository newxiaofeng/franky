/**
 * Created by hongyu.feng on 2015/6/1.
 */
var React = require('react/addons');
var PropTypes = React.PropTypes;
require('./list.less');
var classable = require('../../common/mixins/classable');
module.exports = React.createClass({
    displayName: "List",

    mixins: [classable],

    propTypes: {
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        className: PropTypes.string,
        disabledClassName: PropTypes.string,
        isVerticalMiddle: PropTypes.bool
    },

    componentDidMount: function() {
        var list;
        if(this.props.isVerticalMiddle) {
            list = this.getDOMNode();
            list.style.top = '50%';
            list.style.marginTop = -list.offsetHeight/2 + 'px';
        }
    },

    getDefaultProps: function() {
        return {
            className: 'list',
            onMouseOver: function(e) {
                var target = e.target;
                e.preventDefault()
                if(e.currentTarget == target) {
                    return false;
                }
                target.style.transform = 'translate(20px)';
                target.style.backgroundColor = '#0099FF';
                target.style.color = '#fff';
            },
            onMouseOut: function(e) {
                var target = e.target;
                e.preventDefault()
                if(e.currentTarget == target) {
                    return false;
                }
                target.style.transform = 'translate(0px)';
                target.style.backgroundColor = '#fff';
                target.style.color = '#0099FF';
            }
        }
    },
    render: function() {
        return (
            <ul {...this.props}>{this.props.children}</ul>
        );
    }
});
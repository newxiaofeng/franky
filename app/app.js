var React = require('react/addons');
var Router = require('react-router');
var {Route, NotFoundRoute, DefaultRoute, RouteHandler, Link} =Router;
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
require('./css/app.less');
var Button = require('./components/common/button/button');
React.initializeTouchEvents(true);

var App = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render: function () {
        var name = this.context.router.getCurrentPath();
        return (
            <div className={"layout-page"}>
                <main className={"layout-main"}>
                    {/*<ul>
                        <li><Link to="page1">Page 1</Link></li>
                        <li><Link to="page2">Page 2</Link></li>
                    </ul>*/}
                    <TransitionGroup component="div" transitionName="bounce">
                        <RouteHandler key={name}/>
                    </TransitionGroup>
                </main>
            </div>
        );
    }
});
var Page1 = React.createClass({
    render: function () {
        return (
            <div className="Image">
                <h1>Page 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
});
var Page2 = React.createClass({
    render: function () {
        return (
            <div {...this.props} className="Image">
                <Button>我是按钮</Button>
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
})
var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={require('./components/pages/homePage/homePage')}></DefaultRoute>
        <Route name="page1" handler={Page1} />
        <Route name="page2" handler={Page2} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler/>, document.getElementById('app'));
    var scene = document.getElementById('scene');
    console.log(scene);
    var parallax = new Parallax(scene);
});
const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;



window.SessionAptUtil = require('./util/session_api_util');

const SessionActions = require('./actions/session_actions');
const App = require('./components/app');
const LoginForm = require('./components/login_form');
const Dashboard = require('./components/dashboard');
const SessionStore = ('./stores/session_store');

// const cloudinary = require('cloudinary');
//
// cloudinary.config({
//   cloud_name: 'dznf6puuv',
//   api_key: '523524567283788',
//   api_secret: 'mNRIHnW4N7x3LYtFqaVm0FVYDes'
// });

const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
      // <Route path="/dashboard" component={Dashboard} />

      <Route path="/dashboard" component={Dashboard} onEnter={ _ensureLoggedIn }/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded",  () => {
  if (window.currentUser){
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(appRouter, document.getElementById('content'));
});

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      hashHistory.replace('/login');
    }
}

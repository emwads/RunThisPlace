const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

window.WorkoutStore = require('./stores/workout_store');
window.SessionAptUtil = require('./util/session_api_util');
window.WorkoutActions = require('./actions/workout_actions');


const SessionActions = require('./actions/session_actions');
const App = require('./components/app');
const LoginForm = require('./components/login_form');
const Dashboard = require('./components/dashboard');
const SessionStore = require('./stores/session_store');
const Welcome = require('./components/welcome');
const WorkoutDetail = require('./components/workouts/workout_detail');
const WorkoutForm = require('./components/workouts/workout_form');
const WorkoutEditForm = require('./components/workouts/workout_edit_form');


const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ Welcome } />
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />

      <Route path="/dashboard" component={Dashboard} onEnter={ _ensureLoggedIn }/>
      <Route path="/workouts/new" component={WorkoutForm} onEnter={ _ensureLoggedIn }/>
      <Route path="/workouts/:workoutId" component={WorkoutDetail} onEnter={ _ensureLoggedIn }/>
      <Route path="/workouts/:workoutId/edit" component={WorkoutEditForm} onEnter={ _ensureLoggedIn }/>

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
    replace('/login');
  }
}

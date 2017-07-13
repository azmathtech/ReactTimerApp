var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
//require('style!css!applicationStyles')

//App scss - this requires an additional loader sass
require('style!css!sass!applicationStyles')

// object destructuring example
// var obj = {
//   name: 'Michael'
// }
// var {name} = obj;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

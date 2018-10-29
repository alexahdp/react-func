import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import State from './components/State';
import Context from './components/Context';
import Reducer from './components/Reducer';
import Waterfall from './components/Waterfall';

const App = () => {
  return <Router>
    <div>
      <ul>
        <li className="menu-item"><Link to="/">Main</Link></li>
        <li className="menu-item"><Link to="/useState">useState</Link></li>
        <li className="menu-item"><Link to="/useContext">useContext</Link></li>
        <li className="menu-item"><Link to="/useReducer">useReducer</Link></li>
        <li className="menu-item"><Link to="/waterfall">Waterfall</Link></li>
      </ul>

      <Route exact path="/" component={() => <Redirect to="/useState" />} />
      <Route path="/useState" component={State} />
      <Route path="/useContext" component={Context} />
      <Route path="/useReducer" component={Reducer} />
      <Route path="/waterfall" component={Waterfall} />
    </div>
  </Router>
};


ReactDOM.render(App(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import State from './components/State';
import Context from './components/Context';
import Reducer from './components/Reducer';
import Waterfall from './components/Waterfall';
import ContextProvider from './components/ContextProvider';
import LazyLoad from './components/LazyLoad';

const App = () => {
  return <Router>
    <div>
      <ul className="main-menu">
        <li className="menu-item"><Link to="/">Main</Link></li>
        <li className="menu-item"><Link to="/useState">useState</Link></li>
        <li className="menu-item"><Link to="/useContext">useContext</Link></li>
        <li className="menu-item"><Link to="/useReducer">useReducer</Link></li>
        <li className="menu-item"><Link to="/waterfall">Waterfall</Link></li>
        <li className="menu-item"><Link to="/context-provider">ContextProvider</Link></li>
        <li className="menu-item"><Link to="/lazy-load">LazyLoad</Link></li>
      </ul>

      <div className="content">
        <Route exact path="/" component={() => <Redirect to="/useState" />} />
        <Route path="/useState" component={State} />
        <Route path="/useContext" component={Context} />
        <Route path="/useReducer" component={Reducer} />
        <Route path="/waterfall" component={Waterfall} />
        <Route path="/context-provider" component={ContextProvider} />
        <Route path="/lazy-load" component={LazyLoad} />

      </div>
    </div>
  </Router>
};


ReactDOM.render(App(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

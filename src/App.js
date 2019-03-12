import React, {lazy, Suspense} from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={LazyComponent('About', {style: {color: 'green'}, text: 'here is some text'})} />
      </Switch>
    </div>
  </Router>
);

const LazyComponent = (component, props) => {
  let Component = lazy(() => import(`./${component}`));
  return (
    () => 
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
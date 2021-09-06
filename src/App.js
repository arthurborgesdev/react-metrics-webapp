import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getCovid from './redux/slices/covidSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getCovid());
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Hello, React</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

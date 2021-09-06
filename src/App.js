import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getCovid from './redux/slices/covidSlice';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getCovid());
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';
import store from '../redux/configureStore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><Home /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

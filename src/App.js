import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = props => {
  console.log(props);
  return <h1>Hats Page</h1>;
};

const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
};

export default App;

import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import RouterURL from './components/RouterURL';
import HeaderNav from './components/HeaderNav';
import Menu from './components/Menu';
function App() {
  return (
    <Router>
      <div>
        <HeaderNav></HeaderNav>
        <RouterURL></RouterURL>
      </div>
    </Router>
  );
}

export default App;

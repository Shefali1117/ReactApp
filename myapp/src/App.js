import React from 'react';
import Toolbar from './Components/ToolBar/Toolbar';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './Components/MainContainer/MainContainer';

import './App.css';

function App() {
  return (
  <Router>
      <Toolbar/>
      <MainContainer/>
  </Router>

  );
}

export default App;

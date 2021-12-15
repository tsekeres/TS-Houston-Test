import React from 'react';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;

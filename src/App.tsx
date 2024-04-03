import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import TopBar from './components/TopBar'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <TopBar />
        <AppRouter />
      </div>
    </Router>
  );
};

export default App;
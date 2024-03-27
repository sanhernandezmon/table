// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './molecules/UserForm';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Form</h1>
        <Routes>
          <Route path="/input" element={<FormComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

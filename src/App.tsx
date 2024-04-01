// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormComponent from './molecules/user/UserForm';
import UserList from './molecules/user/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/user" element={<FormComponent />} />
            <Route path="/users" element={<UserList />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

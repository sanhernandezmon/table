import { Routes, Route ,Navigate } from 'react-router-dom';
import FormComponent from '../user/pages/UserForm';
import UserList from '../user/pages/UserList';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/users" />} />
      <Route path="/user" element={<FormComponent />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default AppRouter;

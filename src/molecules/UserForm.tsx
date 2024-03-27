// UserForm.tsx
import React from 'react';
import useUserStore, { UserData } from '../stores/useUserStore';

const useForm = () => {
  const { user, setUser } = useUserStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add validation logic here if needed
    console.log('Submitting:', user);
    // Reset form fields after submission
    setUser({ name: '', email: '', number: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof UserData) => {
    setUser({ [key]: e.target.value });
  };

  return {
    user,
    handleChange,
    handleSubmit,
  };
};

const UserForm = () => {
  const { user, handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={user.name} onChange={(e) => handleChange(e, 'name')} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={user.email} onChange={(e) => handleChange(e, 'email')} />
        </label>
      </div>
      <div>
        <label>
          Number:
          <input type="text" value={user.number} onChange={(e) => handleChange(e, 'number')} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

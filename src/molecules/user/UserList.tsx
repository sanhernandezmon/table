import { useState } from 'react';
import useUserStore, { UserData } from '../../stores/useUserStore';
import './UserList.css'; 


const UserList = () => {
  const { users, deleteUser } = useUserStore();
  const [deletingUserId, setDeletingUserId] = useState(0);

  const handleDeleteClick = (userId: number) => {
    setDeletingUserId(userId);
    deleteUser(userId);
  };

  return (
    <div className="user-card">
      <h2>User List</h2>
      <table className="user-table"> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: UserData) => ( 
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>
                <button
                  onClick={() => handleDeleteClick(user.id)}
                  disabled={deletingUserId === user.id}
                >
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
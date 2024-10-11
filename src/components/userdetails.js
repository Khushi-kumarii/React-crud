// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser } from '../services/api';
import UserForm from './userform'; // import UserForm for creating users
import UserEdit from './useredit'; // import UserEdit for editing users
import { toast } from 'react-toastify';

const Userdetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users');
        toast.error('Error fetching users');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
        toast.success('User deleted successfully');
      } catch (error) {
        toast.error('Failed to delete user');
      }
    }
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const openCreateModal = () => {
    setIsCreating(true);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button onClick={openCreateModal}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => openEditModal(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isCreating && <UserForm closeModal={() => setIsCreating(false)} setUsers={setUsers} />}
      {isEditing && <UserEdit user={selectedUser} closeModal={() => { setIsEditing(false); setSelectedUser(null); }} setUsers={setUsers} />}
    </div>
  );
};

export default Userdetails;

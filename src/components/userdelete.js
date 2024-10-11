const Userdelete = ({ user, closeModal }) => {
    const handleDelete = async () => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`);
        alert('User deleted successfully!');
        closeModal();
      } catch (error) {
        alert('Failed to delete user');
      }
    };
  
    return (
      <div>
        <p>Are you sure you want to delete {user.name}?</p>
        <button onClick={handleDelete}>Yes, Delete</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    );
  };
  
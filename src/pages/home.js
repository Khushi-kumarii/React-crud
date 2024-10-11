
import React from 'react';
import Userdetails from '../components/userdetails';
import '../style.css'; 

const Home = () => {
  return (
    <div className='container'>
      <h1>User Management</h1>
      <Userdetails />
    </div>
  );
};

export default Home;

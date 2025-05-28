import React from 'react';
import UserCard from './UserCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';

const Profile = () => {

  const user = useSelector((store) => store.user);

  return user && (
    <div className='flex justify-center my-10'>
      <EditProfile user={user} />
    </div>
  )
}

export default Profile;





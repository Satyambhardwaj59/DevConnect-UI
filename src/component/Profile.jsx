import React from 'react';
import UserCard from './UserCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';

const Profile = () => {

  const user = useSelector(store => store.user);

  return user &&(
    <div className='flex justify-center my-10'>
      <EditProfile user={user}/>
    </div>
  )
}

export default Profile;



// import React from 'react'
// import { useSelector } from 'react-redux'
// import UserCard from './userCard';
// import { Link } from 'react-router-dom';

// const Profile = () => {
//   const userData = useSelector((store) => store.user);
//   console.log(userData);
  
//   return (
    
//     <div className='flex justify-center my-10'>
//       <UserCard user={userData}/>
//       <Link to='/profile/edit'><button className='btn btn-secondary ml-16'>Edit Profile</button></Link>
//     </div>
    
//   )
// }

// export default Profile;


      //<Link to='/profile/edit'><button className='btn btn-secondary ml-16'>Edit Profile</button></Link>

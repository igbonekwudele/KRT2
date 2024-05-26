import React from 'react';

const UserDetails = ({user}) => {
return(
    <div className='details'>
      <h3> {user.name}</h3>
      <p> {user.bio}</p>
      <p> {user.dateofBirth} </p>
    </div>
  );
};
export default UserDetails;
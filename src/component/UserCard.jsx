import React from 'react'

export const UserCard = ({user}) => {
  const {firstName, lastName, age, photoUrl, gender, skills, about} = user;
  
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
            <img
            className='h-64'
            src={photoUrl}
            alt="Photo" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <p>{age + ", " + gender}</p>
            <p>{about}</p>
            <p>{skills.join(", ")}</p>
            <div className="card-actions justify-around mt-4">
            <button className="btn btn-primary">Reject</button>
            <button className="btn btn-secondary">Intrested</button>
            </div>
        </div>
    </div>
  )
};

export default UserCard;
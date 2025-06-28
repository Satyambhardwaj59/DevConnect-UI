import React from 'react'

const ConnectionCard = ({user}) => {
    
    const {firstName, lastName, photoUrl, age, gender, about, skills} = user;
    
  return (
    <div className="card card-side bg-base-300 w-108 shadow-sm m-10 ">
        <figure className='w-1/2'>
            <img
            src={photoUrl}
            alt="Movie" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <p>{about}</p>
            <p>{age + ",  " + gender}</p>
            <p>{skills.join(", ")}</p>
        </div>
    </div>
  )
}

export default ConnectionCard

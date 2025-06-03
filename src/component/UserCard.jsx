import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constantes';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

export const UserCard = ({user}) => {
  const dispatch = useDispatch();
  const {firstName, lastName, age, photoUrl, gender, skills, about, _id} = user;

  const handleSendRequest = async (status, _id) => {
     await axios.post(BASE_URL + "/request/send/" + status + "/" + _id, {}, {withCredentials: true});
    dispatch(removeFeed(_id));
  }
  
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
            <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
            <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Intrested</button>
            </div>
        </div>
    </div>
  )
};

export default UserCard;
import React from 'react'
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/constantes';
import { removeRequest } from '../utils/requestSlice';
import axios from 'axios';

const RequestCard = ({user}) => {
   const {firstName, lastName, photoUrl, age, gender, about, skills} = user.fromUserId;
   const {_id} = user;
   const dispatch = useDispatch();

   const reviewRequest = async (status, _id) => {
        try {
             await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {withCredentials: true});
            dispatch(removeRequest(_id))
        } catch (error) {
            <Error status={error.status} title={"Internal Server Chaos 😵‍💫"} message={ error.message} />
            console.log(error);
            
        }
   }

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
            <div className='flex justify-around mt-2'>
                <button className="btn btn-active btn-secondary" onClick={() => reviewRequest("rejected", _id)}>Reject</button>
                <button className="btn btn-active btn-accent" onClick={() => reviewRequest("accepted", _id)}>Accept</button>
            </div>
        </div>
    </div>
  )
}

export default RequestCard;



    // const requestData = useSelector((store) => store.request)
    // const dispactch = useDispatch();

    // const reviewRequest = async (status, _id) => {
    //     try {
    //     const res = axios.post(BASE_URL + "/request/review/" + status + "/" + _id);
    //     dispactch(removeRequest(_id))
    //     } catch (error) {
    //     console.log(error);
        
    //     }
    // }

import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constantes'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'
import RequestCard from './RequestCard'

const Request = () => {

  const requestData = useSelector((store) => store.request)
  const dispactch = useDispatch();

  const fetchData = async () => {
    const res = await axios.get(BASE_URL + '/user/connection/received', {withCredentials: true});
    dispactch(addRequest(res.data.data))
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(requestData);
  

  return requestData && (
        <div className='flex flex-col justify-center items-center mt-10 '>
          <h1 className='text-3xl'>Connection</h1>
          {requestData ? (requestData.map((conn) => <RequestCard key={conn._id} user={conn.fromUserId}/>)) : (<h1>No connection</h1>)}

        </div>
  )
}

// { requestData ? 
//         (requestData.data.map((data) => {
//           console.log(data);
          
//           <h1>{data.fromUserId.firstName}</h1>
//         })) : <h1>Data not found !!1</h1>
//       }

export default Request;

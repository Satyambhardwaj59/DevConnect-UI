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
    try {
      const res = await axios.get(BASE_URL + '/user/connection/received', {withCredentials: true});
      dispactch(addRequest(res.data.data))
    } catch (error) {
      // TODO
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return requestData && (
        <div className='flex flex-col justify-center items-center mt-10 '>
          <h1 className='text-3xl'>Connection Request</h1>

          {requestData ? (requestData.map((conn) => <RequestCard key={conn._id} user={conn}/>)) : (<h1>No connection</h1>)}
          
        </div>
  )
}

export default Request;

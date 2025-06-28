import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from './../utils/constantes';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';
import ConnectionCard from './ConnectionCard';
import Error from './Error';

const Connections = () => {
    const connection = useSelector((store) => store.connection)
    
    const dispatch = useDispatch()
    

    const fetchData = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connection", {withCredentials: true});
            dispatch(addConnection(res.data.data));
        } catch (error) {
            <Error status={404} title={"Lost in Space 🚀"} message={"The page you're looking for doesn't exist in this galaxy."} />
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    

    return (
      <>
        <div className='flex flex-col justify-center items-center mt-10 '>
          <h1 className='text-3xl'>Connection</h1>
          {connection ? (connection.map((conn) => <ConnectionCard key={conn._id} user={conn}/>)) : (<h1>No connection</h1>)}

        </div>
      </>
    )
  
}
// 
{/* <div key={connection._id}>
            <h1>{connection.firsName}</h1>
            <ConnectionCard user={connection}/>
        </div> */}
export default Connections

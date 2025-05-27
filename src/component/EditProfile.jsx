import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { BASE_URL } from '../utils/constantes';
import { addUser } from '../utils/userSlice';
import UserCard from './UserCard';

const EditProfile = ({user}) => {

    const [firstName, setFirstName] = useState(user.user.firstName);
    const [lastName, setLastName] = useState(user.user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.user.photoUrl);
    const [age, setAge] = useState(user.user.age);
    const [gender, setGender] = useState(user.user.gender);
    const [skills, setSkills] = useState(user.user.skills);
    const [about, setAbout] = useState(user.user.about);
    const [error, setError] = useState();
    const [showToast, setShowToast] = useState(false)
    const dispatch = useDispatch();

    const handelEdit = async () => {
        try { 
            const res = await axios.patch(BASE_URL + "/profile/edit", {firstName, lastName, age, gender, about, photoUrl, skills}, {withCredentials: true});
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
        } catch (error) {
            // TODO
            console.log(error.responce);
            
            setError(error.responce);
        }
    }
    

  return user && (
    <div className='flex gap-10'>
      <div className='flex justify-center mb-20'>
        <div className='card bg-base-300 w-96 p-5 shadow-sm gap-2'>
            <h1 className='text-center text-orange-400'>Update Your Profile !!</h1>
            <div className='flex gap-2'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">FirstName</legend>
                    <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">LastName</legend>
                    <input value={lastName} type="text" onChange={(e) => setLastName(e.target.value)} className="input" placeholder="Type here" />
                </fieldset>
            </div>
            <div className='flex gap-2'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Age</legend>
                    <input value={age} type="text" onChange={(e) => setAge(e.target.value)} className="input" placeholder="Type here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Gender</legend>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="select">
                        <option >male</option>
                        <option>female</option>
                        <option>other</option>
                    </select>
                </fieldset>
            </div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">PhotoUrl</legend>
                <textarea value={photoUrl} className="textarea" onChange={(e) => setPhotoUrl(e.target.value)} ></textarea>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <textarea value={about} className="textarea" onChange={(e) => setAbout(e.target.value)} ></textarea>
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Skills</legend>
                <textarea value={skills} className="textarea" onChange={(e) => setSkills(e.target.value)} disabled></textarea>
            </fieldset>
            <p className='text-red-500'>{error}</p>
            <div className='flex justify-center mt-4'>
                <button className='btn btn-secondary' onClick={handelEdit}>Save Update</button>
            </div>
            
        </div>
      </div>
      <div className=''>
        <UserCard user={{firstName, lastName, age, gender, about, photoUrl, skills}}/>
      </div>
      <div>
        {showToast && 
        <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <span>Profile Updated successfully.🎉🎉</span>
            </div>
        </div>}
      </div>
    </div>  
  );
}

export default EditProfile;



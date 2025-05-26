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
    const dispatch = useDispatch();

    const handelEdit = async () => {
        try { 
            const res = await axios.patch(BASE_URL + "/profile/edit", {firstName, lastName, age, gender, about, photoUrl, skills}, {withCredentials: true});
            dispatch(addUser(res.data.data));
        } catch (error) {
            // TODO
            console.log(error);
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
                    <input value={gender} type="text" onChange={(e) => setGender(e.target.value)} className="input" placeholder="Type here" />
                </fieldset>
            </div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">PhotoUrl</legend>
                <input value={photoUrl} type="text" onChange={(e) => setPhotoUrl(e.target.value)} className="input" placeholder="Type here" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input value={about} type="text" onChange={(e) => setAbout(e.target.value)} className="input" placeholder="Type here" />
            </fieldset>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Skills</legend>
                <input value={skills} type="text" onChange={(e) => setSkills(e.target.value)} className="input" placeholder="Type here" />
            </fieldset>

            <div className='flex justify-center mt-4'>
                <button className='btn btn-secondary' onClick={handelEdit}>Save Update</button>
            </div>
            
        </div>
      </div>
      <div className=''>
        <UserCard user={{firstName, lastName, age, gender, about, photoUrl, skills}}/>
      </div>
    </div>  
  );
}

export default EditProfile;



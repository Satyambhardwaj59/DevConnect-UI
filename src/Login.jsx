import {useState} from 'react';
import axios from 'axios';

const Login = () => {

  const [emailId, setEmailId] = useState("satyam@gmail.com");
  const [password, setPassword] = useState("Satyam@123");

  const handleLogin = async () => {
    try {
       return await axios.post("http://localhost:7777/login", {
        emailId,
        password
      }, {withCredentials: true});
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <div className='flex justify-center my-10'>
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">LogIn</h2>
          <div>
            <label className="input validator my-2">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input value={emailId} type="email" placeholder="mail@site.com" onChange={(e) => setEmailId(e.target.value)} required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>

            <label className="input validator my-2">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                  ></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
              </svg>
              <input
                value={password}
                type="password"
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={(e) => setPassword(e.target.value)}
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </p>

          </div>
          <div className="card-actions justify-center my-2">
            <button className="btn btn-primary " onClick={handleLogin}>LogIn</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

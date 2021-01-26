import React, { useState } from "react";
import GoogleLogin from "react-google-login";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const OnLoginSucces = e => {
        console.log(e);
    }

  return <div>
        <form className='flex justify-center mt-20'>
        <GoogleLogin
        clientId='776281166386-0g7s58016l7qul5bf57cu3uv6eud4jmd.apps.googleusercontent.com'
        buttonText="Fuck"
        onSuccess={OnLoginSucces}
        />
            <input className="border-2 rounded-sm border-indigo-100" autoFocus value={userName} onChange={({ target : value }) => setUserName(value)} type="text" placeholder="Enter your Email" />
            <input value={password} onChange={({ target : value }) => setPassword(value)} type="password" placeholder="Enter your password" />
        </form>
  </div>;
};

export default Login;

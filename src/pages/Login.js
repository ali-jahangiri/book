import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";

import FreezScreen from "../components/FreezScreen";
import Input from "../components/Input";

import { authUser } from "../store/Auth";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthing, setisAuthing] = useState(false);

  const OnLoginSucces = ({ profileObj }) => {
    dispatch(authUser(profileObj));
    history.push("/");
  };

  const onAuthFail = ({ error }) => {
    if (error === "popup_closed_by_user") setisAuthing(false);
  };
  return (
    <div className="w-full flex justify-center h-screen items-center">
      <form>
        {isAuthing && <FreezScreen />}
        <div className="flex justify-center flex-col-reverse">
          <GoogleLogin
            onAutoLoadFinished={() => console.log("onAutoLoadFinished")}
            onRequest={() => setisAuthing(true)}
            onFailure={onAuthFail}
            clientId="776281166386-0g7s58016l7qul5bf57cu3uv6eud4jmd.apps.googleusercontent.com"
            buttonText="Sign in"
            onSuccess={OnLoginSucces}
          />
          <p className="font-sans text-3xl my-5 font-semibold text-center text-gray-200	">
            or
          </p>
          <Input
            value={password}
            valueSetter={setPassword}
            placeholder="Password"
          />
          <Input
            autoFocus
            value={userName}
            valueSetter={setUserName}
            placeholder="username"
          />
          <p className="font-sans text-3xl my-5 font-semibold">Sign in</p>
        </div>
      </form>
    </div>
  );
};

export default Login;

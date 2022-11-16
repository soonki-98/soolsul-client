import { useLogin } from "@hooks/pages/login";
import React from "react";

function Login() {
  const { loginInfo, handleChangeLoginInfo, handleLoginSubmit } = useLogin();
  const { id, password } = loginInfo;

  return (
    <div>
      <input id="ID" type="text" value={id} placeholder="ID" onChange={handleChangeLoginInfo} />
      <input id="PASSWORD" type="password" value={password} placeholder="PASSWORD" onChange={handleChangeLoginInfo} />
      <button onClick={handleLoginSubmit}>LOGIN</button>
    </div>
  );
}

export default Login;

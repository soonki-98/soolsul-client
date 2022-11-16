import apis from "@apis/index";
import { LoginType } from "@lib/types/user";
import { useState } from "react";

export default function useLogin() {
  const [loginInfo, setLoginInfo] = useState<LoginType>({ id: "", password: "" });

  const handleChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "ID") {
      setLoginInfo({ ...loginInfo, id: e.target.value });
    } else {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
  };

  const handleLoginSubmit = async () => {
    try {
      await apis.user.login(loginInfo);
      setLoginInfo({ id: "", password: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return { loginInfo, handleChangeLoginInfo, handleLoginSubmit };
}

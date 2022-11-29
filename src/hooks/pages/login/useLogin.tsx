import apis from '@apis/index';
import { LoginType } from '@lib/types/user';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function useLogin() {
  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState<LoginType>({ email: '', password: '' });

  const handleChangeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'email') {
      setLoginInfo({ ...loginInfo, email: e.target.value });
    } else {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
  };

  const handleLoginSubmit = async () => {
    console.log('로그인 요청!', loginInfo);

    try {
      await apis.user
        .login(loginInfo)
        .then((res) => console.log(res))
        .then(() => router.push('map'))
        .catch((err) => console.log('회원가입 에러 : ', err.message));
      setLoginInfo({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return { loginInfo, handleChangeLoginInfo, handleLoginSubmit };
}

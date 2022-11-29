import React, { useState } from 'react';
import { useRouter } from 'next/router';
import apis from '@apis/index';

export default function useSignup() {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    name: '',
    nickname: '',
  });

  const router = useRouter();
  const [invalidText, setInvalidText] = useState('');
  const [errorPart, setErrorPart] = useState('');

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputID = e.target.id;

    setData({
      ...data,
      [inputID]: inputValue,
    });
  };

  // 이메일 형식 체크 함수
  const checkEmailValidation = (email: string): boolean => {
    const regex = /^([a-zA-Z0-9\-._]+)@([a-zA-Z0-9-_]+).([a-z]{2,20})(.[a-z]{2,10})$/;
    return regex.test(email);
  };

  // 비밀번호 유효성 검사 함수
  const validation = (password: string): boolean => {
    const passwordReg =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    const hasEveryCharacter = passwordReg.test(password);
    const isLongerThanTen = password.length >= 10 ? true : false;

    return hasEveryCharacter && isLongerThanTen;
  };

  const handleSignSubmit = async () => {
    if (checkEmailValidation(data.email) === false) {
      // alert('이메일을 바르게 입력해주세요.');
      setInvalidText('이메일을 바르게 입력해주세요.');
      setErrorPart('email');
    } else if (validation(data.password) === false) {
      setInvalidText('10~16자 영문과 숫자, 특수문자를 조합해주세요.');
      setErrorPart('password');
    } else if (data.password !== data.confirmPassword) {
      setInvalidText('패스워드가 일치하지 않습니다.');
      setErrorPart('confirmPassword');
    } else if (Object.values(data).includes('')) {
      alert('가입 정보를 다  채워주세요');
    } else {
      console.log('제출!');
      await apis.user
        .signup(data)
        .then((res) => {
          console.log(res);
          router.push('map');
        })
        .catch((err) => console.log('회원가입 에러 : ', err.message));
    }
  };

  return { data, invalidText, errorPart, handleSignSubmit, handleInputValue };
}

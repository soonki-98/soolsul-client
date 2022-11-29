import { LoginType, SignupType } from '@lib/types/user';
import axios from 'axios';
import RestAPI from './restapi';

class UserAPI {
  /**
   * 로그인하기
   * @param id 유저 아이디
   * @param password 비밀번호
   */
  public async login(data: LoginType) {
    try {
      const result = await RestAPI.post('/auth/login', data, {
        headers: { 'X-Requested-With': 'JSONLoginHttpRequest' },
      });

      const { accessToken } = result.data;
      const { refreshToken } = result.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      console.log('axios 헤더의 Authorization은 현재 :', axios.defaults.headers.common.Authorization);
      return result;
    } catch (error) {
      console.log('로그인 에러', error);
      throw error;
    }
  }

  /**
   * 회원가입 하기
   * @param id 유저 아이디
   * @param password 비밀번호
   * @param phoneNumber 전화번호
   * @param name 이름
   * @param nickname 닉네임
   */
  public async signup(data: SignupType) {
    try {
      const result = await RestAPI.post('/auth/register', data);
      console.log(result);
      return result;
    } catch (error) {
      console.log('회원가입 에러', error);
      throw error;
    }
  }

  public async logout() {
    // const accessToken = localStorage.getItem('accessToken')
    // const refreshToken = localStorage.getItem('accessToken');
    try {
      const result = await RestAPI.post('/auth/logout');
      console.log(result);

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      axios.defaults.headers.common.Authorization = '';
      return result;
    } catch (error) {
      console.log('로그아웃 에러', error);
      throw error;
    }
  }
}

export default new UserAPI();

import { LoginType } from "@lib/types/user";
import APIS from "./network";

/**
 * 로그인하기
 * @param id 유저 아이디
 * @param password 비밀번호
 */
export function login(data: LoginType) {
  return new Promise((resolve, reject) => {
    try {
      (async () => {
        const result = await APIS.user.login(data);
        resolve(result);
      })();
    } catch (error) {
      reject(error);
    }
  });
}

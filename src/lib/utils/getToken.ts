/**
 * 스토리지에서 토큰 가져오는 유틸 함수
 * @return token
 */
export default function getToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem("token");
}

import { useMemo } from "react";

export default function useGetToken() {
  const token = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("token");
    } else return null;
  }, []);

  return token;
}

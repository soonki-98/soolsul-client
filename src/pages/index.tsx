import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem("GeoLocation");
  }, []);
  return (
    <div>
      <button
        style={{ display: "block" }}
        onClick={() => {
          router.push("map");
        }}
      >
        입장하기
      </button>
    </div>
  );
};

export default Home;

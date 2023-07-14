import { useEffect, useState } from "react";

export default function useClubLike() {
  const [likedClubs, setLikedClubs] = useState([]);

  useEffect(() => {
    setLikedClubs(
      JSON.parse(window.localStorage.getItem("likedClubs") || "[]")
    );
  }, []);

  const modifyLikedClubs = (newLikedClubs) => {
    window.localStorage.setItem("likedClubs", JSON.stringify(newLikedClubs));
    setLikedClubs(newLikedClubs);
  };

  return [likedClubs, modifyLikedClubs];
}

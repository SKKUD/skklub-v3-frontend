import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useCampusDetect = () => {
  const router = useRouter();
  const campusDetect = router.pathname.slice(1, 6);
  const [campus, setCampus] = useState(campusDetect === "suwon");
  useEffect(() => {
    if (campusDetect === "suwon" || campusDetect === "seoul") {
      if (campusDetect === "suwon") {
        setCampus(true);
      } else {
        setCampus(false);
      }
    }
  }, [campusDetect]);

  return campus;
};

export default useCampusDetect;

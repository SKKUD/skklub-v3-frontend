import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

const useCampusDetect = () => {
  const router = useRouter();
  const campusName = router.pathname.slice(1, 6);
  const [campus, setCampus] = useState(campusName === "suwon"); // suwon === true, seoul === false

  const updateCampus = useCallback(() => {
    if (campusName === "suwon") {
      setCampus(true);
    } else if (campusName === "seoul") {
      setCampus(false);
    }
  }, [campusName]);

  useEffect(() => {
    if (campusName === "suwon" || campusName === "seoul") {
      updateCampus();
    }
  }, [campusName, updateCampus]);

  return { campus, campusName };
};

export default useCampusDetect;

"use client";
import { usePathname } from "next/navigation";

const useURLParse = () => {
  const pathName = usePathname();

  const [_, location, type] = pathName.split("/");
  const isSuwon = location === "suwon";
  return { isSuwon, location, type };
};

export default useURLParse;

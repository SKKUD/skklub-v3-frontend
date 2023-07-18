"use client";

import CardBoard from "@/app/components/cardBoard/CardBoard";
import { CLUBS_DUMMY_DATA } from "@/utils/constants";
import { getClubs } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export default function AcademicClubs() {
  //API 함수호출
  const CARDS_DATA = CLUBS_DUMMY_DATA;
  // const { data } = useQuery({
  //   queryKey: ["seoul-academic"],
  //   queryFn: () => getClubs("명륜", "학회"),
  //   onSuccess: (data) => console.log(data),
  //   onError: (error) => console.log(error),
  // });
  return <CardBoard cardsData={CARDS_DATA} />;
}

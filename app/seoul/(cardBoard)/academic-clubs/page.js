"use client";

import CardBoard from "@/app/components/cardBoard/CardBoard";
import LoadingLayout from "@/app/layouts/loading/LoadingLayout";
import { CLUBS_DUMMY_DATA } from "@/utils/constants";
import { getClubs } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export default function AcademicClubs() {
  const { data, isLoading } = useQuery({
    queryKey: ["seoul-academic"],
    queryFn: () => getClubs("명륜", "학회"),
  });

  return isLoading ? <LoadingLayout /> : <CardBoard cardsData={data.content} />;
}

"use client";

import CardBoard from "@/app/components/cardBoard/CardBoard";
import LoadingLayout from "@/app/layouts/loading/LoadingLayout";
import { getClubs } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

export default function CentralClubs() {
  const { data, isLoading } = useQuery({
    queryKey: ["seoul-central"],
    queryFn: () => getClubs("명륜", "중앙동아리"),
    onSuccess: (data) => console.log(data),
  });

  return isLoading ? <LoadingLayout /> : <CardBoard cardsData={data.content} />;
}

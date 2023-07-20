import CardBoard from "@/app/components/cardBoard/CardBoard";
import { CLUBS_DUMMY_DATA } from "@/utils/constants";

export default function CentralClubs() {
  // const { data } = useQuery({
  //   queryKey: ["seoul-groups"],
  //   queryFn: () => getClubs("명륜", "소모임"),
  // });
  //API 함수호출
  const CARDS_DATA = CLUBS_DUMMY_DATA;

  return <CardBoard cardsData={CARDS_DATA} />;
}

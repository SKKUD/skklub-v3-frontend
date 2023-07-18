import CardBoard from "@/app/components/cardBoard/CardBoard";
import { CLUBS_DUMMY_DATA } from "@/utils/constants";

export default function CentralClubs() {
  //API 함수호출
  // const { data } = useQuery({
  //   queryKey: ["seoul-independent"],
  //   queryFn: () => getClubs("명륜", "기타동아리"),
  // });

  const CARDS_DATA = CLUBS_DUMMY_DATA;
  return <CardBoard cardsData={CARDS_DATA} />;
}

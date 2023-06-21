import CardBoard from "@/app/components/common/CardBoard";
import { CLUBS_DUMMY_DATA } from "@/utils/constants";

export default function CentralClubs() {
  //API 함수호출
  const CARDS_DATA = CLUBS_DUMMY_DATA;

  return <CardBoard cardsData={CARDS_DATA} />;
}

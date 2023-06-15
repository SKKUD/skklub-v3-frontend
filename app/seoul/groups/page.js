import ClubsLayout from "@/app/layouts/clubs/ClubsLayout";
import { CLUBS_DUMMY_DATA } from "@/utils/constants";

export default function CentralClubs() {
  const ClubCategory = "소모임";
  //API 함수호출
  const CARDS_DATA = CLUBS_DUMMY_DATA;
  return (
    <>
      <ClubsLayout club={ClubCategory} cardsData={CARDS_DATA} />
    </>
  );
}

import ClubsLayout from "../../layout/clubs/ClubsLayout";
import { CLUBS_DUMMY_DATA } from "../../utils/constants";

export default function CentralClubs() {
  const ClubCategory = "중앙동아리";
  //API 함수호출
  const CARDS_DATA = CLUBS_DUMMY_DATA;
  return (
    <>
      <ClubsLayout club={ClubCategory} cardsData={CARDS_DATA} />
    </>
  );
}

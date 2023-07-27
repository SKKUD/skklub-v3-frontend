import styled from "@emotion/styled";
import ClubTitle from "./ClubTitle";
import ClubType from "./ClubType";

import useURLParse from "@/hooks/useURLParse";
import { useRouter } from "next/navigation";

const RecommendationClub = styled.div`
  position: relative;
  width: 174px;
  height: 174px;
  background-color: rgba(80, 207, 177, 1);
  border-radius: 10px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    background-color: #fff;
    flex: 1;
    /* aspect-ratio: 1 / 1; */
  }

  @media (max-width: 425px) {
    flex: none;
    width: 106px;
    height: 106px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 375px) {
    width: 96px;
    height: 96px;
  }
`;

export default function RecommendationClubCard({ clubData }) {
  const router = useRouter();
  const { location } = useURLParse();
  const handleCardClick = () => {
    router.push(`${location}/${clubData.id}`);
  };
  return (
    <RecommendationClub onClick={handleCardClick}>
      <ClubTitle>{clubData.name}</ClubTitle>
      <ClubType>{clubData.campus} / 사실 분과 들어갸야함</ClubType>
    </RecommendationClub>
  );
}

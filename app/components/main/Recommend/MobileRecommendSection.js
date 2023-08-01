import styled from "@emotion/styled";
import SectionTitle from "../SectionTitle";
import useURLParse from "../../../../hooks/useURLParse";
import { RecommendationContent } from "./RecommendationContent";
import { getClubRecommendation } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";
import RecommendationClubCard from "./RecommendationClub";
import useRandomRecommendation from "@/hooks/useRendomRecommendation";
import ThemeContent from "./ThemeContent";

const MobileRecommendWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 4rem;
  @media (max-width: 425px) {
    height: 278px;
  }
`;

const SmallContentContainer = styled.div`
  border-radius: 10px;
  background: #fc7b95;
  width: 100%;
  height: 400px;
  margin-top: 1rem;
  padding: 1rem;
  @media (max-width: 425px) {
    height: 242px;
  }
`;

export default function MobileRecommendSection() {
  const { isSuwon } = useURLParse();

  const [category, description, hashtags] = useRandomRecommendation();

  const { data } = useQuery({
    queryFn: () => getClubRecommendation(isSuwon ? "율전" : "명륜", category),
    queryKey: ["club-recommendation", category],
  });

  return (
    <MobileRecommendWrapper>
      <SectionTitle>오늘의 추천동아리</SectionTitle>
      <SmallContentContainer>
        <ThemeContent
          category={category}
          description={description}
          hashtags={hashtags}
        />
        <RecommendationContent>
          {data?.map((club) => (
            <RecommendationClubCard key={club.id} clubData={club} />
          ))}
        </RecommendationContent>
      </SmallContentContainer>
    </MobileRecommendWrapper>
  );
}

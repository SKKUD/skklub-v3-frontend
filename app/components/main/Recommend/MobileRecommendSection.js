import styled from "@emotion/styled";
import SectionTitle from "../Common/SectionTitle";
import ThemeTitle from "./ThemeTitle";
import ThemeSubtitle from "./ThemeSubtitle";
import HashtagWrapper from "./HashtagWrapper";
import Hashtag from "./Hashtag";
import useURLParse from "../../../../hooks/useURLParse";
import { RecommendationContent } from "./RecommendationContent";
import RecommendationClub from "./RecommendationClub";
import ClubType from "./ClubType";
import ClubTitle from "./ClubTitle";

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

  return (
    <MobileRecommendWrapper>
      <SectionTitle>오늘의 추천동아리</SectionTitle>
      <SmallContentContainer>
        <ThemeTitle>인성품과 보람 동시에 잡기</ThemeTitle>
        <ThemeSubtitle>
          {`"뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"`}
        </ThemeSubtitle>
        <HashtagWrapper>
          <Hashtag>#대학생활</Hashtag>
          <Hashtag>#봉사</Hashtag>
          <Hashtag>#친구</Hashtag>
          <Hashtag>#사회공헌</Hashtag>
        </HashtagWrapper>
        <RecommendationContent>
          <RecommendationClub campus={isSuwon}>
            <ClubTitle>성균 민속 연구반 탈</ClubTitle>
            <ClubType>평면예술 / 서예</ClubType>
          </RecommendationClub>
          <RecommendationClub campus={isSuwon}>
            <ClubTitle>성균 민속 연구반 탈</ClubTitle>
            <ClubType>평면예술 / 서예</ClubType>
          </RecommendationClub>
          <RecommendationClub campus={isSuwon}>
            <ClubTitle>성균 민속 연구반 탈</ClubTitle>
            <ClubType>평면예술 / 서예</ClubType>
          </RecommendationClub>
        </RecommendationContent>
      </SmallContentContainer>
    </MobileRecommendWrapper>
  );
}

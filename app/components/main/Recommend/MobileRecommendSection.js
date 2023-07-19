import styled from "@emotion/styled";
import SectionTitle from "../Common/SectionTitle";
import RecommendTheme from "./RecommendTheme";
import RecommendSubTheme from "./RecommendSubThem";
import HashtagWrapper from "./HashtagWrapper";
import Hashtag from "./Hashtag";
import useURLParse from "../../../../hooks/useURLParse";
import { RecommendationContent } from "./RecommendationContent";
import RecommendationClub from "./RecommendationClub";

const MobileRecommendWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 4rem;
  @media (max-width: 425px) {
    height: 278px;
  }
`;

const SmallContentContainer = styled.div`
  background-color: #303030;
  width: 100%;
  height: 400px;
  margin-top: 1rem;
  padding: 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <div>
          <RecommendTheme>인성품과 보람 동시에 잡기</RecommendTheme>
          <RecommendSubTheme style={{ color: "#9B9B9B" }}>
            {`"뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"`}
          </RecommendSubTheme>
          <HashtagWrapper>
            <Hashtag>#대학생활</Hashtag>
            <Hashtag>#봉사</Hashtag>
            <Hashtag>#친구</Hashtag>
            <Hashtag>#사회공헌</Hashtag>
          </HashtagWrapper>
          <RecommendationContent>
            <RecommendationClub campus={isSuwon}>
              성균 민속 연구반 탈
            </RecommendationClub>
            <RecommendationClub campus={isSuwon}>
              성균 민속 연구반 탈
            </RecommendationClub>
            <RecommendationClub campus={isSuwon}>
              성균 민속 연구반 탈
            </RecommendationClub>
          </RecommendationContent>
        </div>
      </SmallContentContainer>
    </MobileRecommendWrapper>
  );
}

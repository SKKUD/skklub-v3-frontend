import styled from "@emotion/styled";
import Phrase from "../Common/Phrase";
import RecommendTheme from "./RecommendTheme";
import RecommendSubTheme from "./RecommendSubThem";
import HashtagWrapper from "./HashtagWrapper";
import Hashtag from "./Hashtag";
import ClubCircle from "./ClubCircle";
import useCampusDetect from "../../../hooks/useCampusDetect";

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

const SmallCircleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  margin-top: 2rem;
  @media (max-width: 425px) {
    margin-top: 1.5rem;
    gap: 8px;
  }
`;

export default function MobileRecommendSection() {
  const { isSuwon } = useCampusDetect();
  return (
    <MobileRecommendWrapper>
      <Phrase>오늘의 추천동아리</Phrase>
      <SmallContentContainer>
        <div>
          <RecommendTheme>인성품과 보람 동시에 잡기</RecommendTheme>
          <RecommendSubTheme style={{ color: "#9B9B9B" }}>
            "뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"
          </RecommendSubTheme>
          <HashtagWrapper>
            <Hashtag>#대학생활</Hashtag>
            <Hashtag>#봉사</Hashtag>
            <Hashtag>#친구</Hashtag>
            <Hashtag>#사회공헌</Hashtag>
          </HashtagWrapper>
          <SmallCircleContainer>
            <ClubCircle isSuwon={isSuwon}>성균 민속 연구반 탈</ClubCircle>
            <ClubCircle isSuwon={isSuwon}>성균 민속 연구반 탈</ClubCircle>
            <ClubCircle isSuwon={isSuwon}>성균 민속 연구반 탈</ClubCircle>
          </SmallCircleContainer>
        </div>
      </SmallContentContainer>
    </MobileRecommendWrapper>
  );
}

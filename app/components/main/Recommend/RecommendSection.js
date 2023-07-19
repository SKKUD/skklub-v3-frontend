import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import SectionTitle from "../Common/SectionTitle";
import ThemeTitle from "./ThemeTitle";
import ThemeSubtitle from "./ThemeSubtitle";
import Hashtag from "./Hashtag";
import HashtagWrapper from "./HashtagWrapper";
import useURLParse from "../../../../hooks/useURLParse";
import { RecommendationContent } from "./RecommendationContent";
import RecommendationClub from "./RecommendationClub";
import SectionDesc from "../Common/SectionDesc";

const RecommendWrapper = styled.div`
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const RecommendationTheme = styled.div`
  height: 174px;
  width: 378px;
  flex: 1;
  background-color: #fc7b95;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 24px;
  gap: 0.75rem;
`;

const ClubTitle = styled.div`
  /* width: 135px;
  height: 93px; */
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #303030;
  text-align: center;
  font-family: Gmarket Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 32px */
  letter-spacing: -0.4px;
`;

const ClubType = styled.div`
  /* position: absolute;
  bottom: 20px; */
  margin-bottom: 20px;
  color: #303030;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 25.2px */
  letter-spacing: -0.14px;
`;

export default function RecommendSection() {
  const { isSuwon } = useURLParse();
  const matches_1024 = useMediaQuery("(max-width:1024px)");
  const matches_950 = useMediaQuery("(max-width:950px)");

  return (
    <RecommendWrapper>
      <SectionTitle>오늘의 추천동아리</SectionTitle>
      <SectionDesc>
        스클럽이 추천하는 동아리를 잘 살펴보세요!
        <br />잘 모르던 분야도 함께 활동하다보면 어느새 즐거운 동료가
        되어있을거에요!
      </SectionDesc>
      <RecommendationContent>
        <RecommendationTheme>
          <ThemeTitle>인성품과 보람 동시에 잡기</ThemeTitle>
          <ThemeSubtitle>
            {`"뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"`}
          </ThemeSubtitle>
          <HashtagWrapper>
            <Hashtag>#대학생활</Hashtag>
            <Hashtag>#봉사</Hashtag>
            <Hashtag>#친구</Hashtag>
            {!matches_950 && <Hashtag>#사회공헌</Hashtag>}
          </HashtagWrapper>
        </RecommendationTheme>
        <RecommendationClub isSuwon={isSuwon}>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
          <ClubType>평면예술/서예</ClubType>
        </RecommendationClub>
        <RecommendationClub isSuwon={isSuwon}>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
          <ClubType>평면예술/서예</ClubType>
        </RecommendationClub>
        {!matches_1024 && (
          <RecommendationClub isSuwon={isSuwon}>
            <ClubTitle>성균 민속 연구반 탈</ClubTitle>
            <ClubType>평면예술/서예</ClubType>
          </RecommendationClub>
        )}
      </RecommendationContent>
    </RecommendWrapper>
  );
}

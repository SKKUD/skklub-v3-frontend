import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";
import SectionTitle from "../Common/SectionTitle";
import RecommendTheme from "./RecommendTheme";
import RecommendSubTheme from "./RecommendSubThem";
import Hashtag from "./Hashtag";
import HashtagWrapper from "./HashtagWrapper";
import useURLParse from "../../../../hooks/useURLParse";
import { RecommendationContent } from "./RecommendationContent";
import RecommendationClub from "./RecommendationClub";
import SectionDesc from "../Common/SectionDesc";

const RecommendWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const RecommendationTheme = styled.div`
  height: 153px;
  flex: 1;
  background-color: #fc7b95;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 68px;
`;

const ClubTitle = styled.div`
  width: 135px;
  height: 93px;
  text-align: center;
  font-weight: 500;
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
          <RecommendTheme>인성품과 보람 동시에 잡기</RecommendTheme>
          <RecommendSubTheme>
            {`"뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"`}
          </RecommendSubTheme>
          <HashtagWrapper>
            <Hashtag>#대학생활</Hashtag>
            <Hashtag>#봉사</Hashtag>
            <Hashtag>#친구</Hashtag>
            {!matches_950 && <Hashtag>#사회공헌</Hashtag>}
          </HashtagWrapper>
        </RecommendationTheme>
        <RecommendationClub isSuwon={isSuwon}>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
        </RecommendationClub>
        <RecommendationClub isSuwon={isSuwon}>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
        </RecommendationClub>
        {!matches_1024 && (
          <RecommendationClub isSuwon={isSuwon}>
            <ClubTitle>성균 민속 연구반 탈</ClubTitle>
          </RecommendationClub>
        )}
      </RecommendationContent>
    </RecommendWrapper>
  );
}

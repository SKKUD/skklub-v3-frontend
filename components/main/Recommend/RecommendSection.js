import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const RecommendWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 120px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const Phrase = styled.div`
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 1rem;
    line-height: 151.5%;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 17px;
  margin-top: 24px;
  padding: 0px 30px;
  @media (max-width: 1400px) {
    padding: 0;
  }
`;

const IntroCircle = styled.div`
  height: 153px;
  flex: 1;
  background-color: #fc7b95;
  border-radius: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 68px;
`;

const IntroTitle = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 150%;
`;
const IntroDetail = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 1rem;
  line-height: 150%;

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 151.5%;
  }
`;
const HashTagContainer = styled.div`
  display: flex;
  /* width: 80%; */
  gap: 0.75rem;
  margin-top: 15px;
`;
const HashTag = styled.div`
  padding: 3px 15px;
  height: 30px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #303030;
  border-radius: 100px;
`;

const ClubCircle = styled.div`
  width: 153px;
  height: 153px;
  background-color: #50cfb1;
  border-radius: 80px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubTitle = styled.div`
  width: 135px;
  height: 93px;
  text-align: center;
  font-weight: 500;
`;

export default function RecommendSection() {
  const matches_1024 = useMediaQuery("(max-width:1024px)");
  const matches_950 = useMediaQuery("(max-width:950px)");
  return (
    <RecommendWrapper>
      <Phrase>오늘의 추천동아리</Phrase>
      <CircleContainer>
        <IntroCircle>
          <IntroTitle>인성품과 보람 동시에 잡기</IntroTitle>
          <IntroDetail>"뜻깊은 봉사활동으로 몸과 마음을 가꿔요!"</IntroDetail>
          <HashTagContainer>
            <HashTag>#대학생활</HashTag>
            <HashTag>#봉사</HashTag>
            <HashTag>#친구</HashTag>
            {!matches_950 && <HashTag>#사회공헌</HashTag>}
          </HashTagContainer>
        </IntroCircle>
        <ClubCircle>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
        </ClubCircle>
        <ClubCircle>
          <ClubTitle>성균 민속 연구반 탈</ClubTitle>
        </ClubCircle>
        {!matches_1024 && (
          <ClubCircle>
            <ClubTitle>성균 민속 연구반 탈</ClubTitle>
          </ClubCircle>
        )}
      </CircleContainer>
    </RecommendWrapper>
  );
}

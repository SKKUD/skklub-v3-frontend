import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const ClubDetailBanner = styled.div`
  width: 100%;
  height: 378px;
  background-color: #a0211d33;
`;

const ClubDetailWrapper = styled.div`
  padding: 0 1rem;
`;

const ClubDetailContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  gap: 30px;
  margin-bottom: 300px;
`;

const ClubDetailCard = styled.div`
  background-color: #2c2c2c;
  height: 264px;
  border-radius: 10px;
  padding-top: 1.75rem;
  padding-left: 2.125rem;
  padding-right: 2.125rem;
  position: relative;

  @media (max-width: 760px) {
    grid-column-start: 1;
    grid-column-end: 4;
    height: auto;
    padding-bottom: 2rem;
  }
`;

const ClubDetailCardTitle = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 107.5%;
  margin-bottom: 0.5rem;
`;

const ClubDetailCardHr = styled.hr`
  border: 0px;
  border-top: 1px solid #737d81;
`;

const RecruitContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.875rem;
  gap: 15px;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const RecruitContent = styled.div`
  flex: 1;
`;

const RecruitSubTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  margin-bottom: 0.25rem;
`;

const RecruitInfoBox = styled.div`
  height: 112px;
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContentWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const InfoContentRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const InfoCategory = styled.div`
  font-weight: 700;
  font-size: 1rem;
`;

const Info = styled.div`
  font-weight: 300;
  font-size: 1rem;
`;

const AboutContent = styled.div`
  font-weight: 300;
  font-size: 1rem;
  line-height: 169%;
  height: 226px;

  @media (max-width: 760px) {
    height: 312px;
    overflow-y: auto;
  }
`;

const ClubPageNaviagateBtn = styled.button`
  position: absolute;
  bottom: 24px;
  right: 30px;
  width: 174px;
  height: 51px;
  background-color: #c4cbcd;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 107.5%;
  color: white;
  border: none;
  @media (max-width: 760px) {
    position: relative;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    margin-top: 2rem;
  }
`;

const DetailContent = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  font-weight: 300;
  font-size: 1rem;
  line-height: 130%;
  white-space: pre-line;
`;

export default function ClubDetail() {
  const match760 = useMediaQuery("(max-width:760px)");
  return (
    <>
      <ClubDetailBanner></ClubDetailBanner>
      <ClubDetailWrapper>
        <ClubDetailContent>
          <ClubDetailCard
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 4,
            }}
          >
            <ClubDetailCardTitle>Recruiting</ClubDetailCardTitle>
            <ClubDetailCardHr />
            <RecruitContentWrapper>
              <RecruitContent>
                <RecruitSubTitle>모집 시기</RecruitSubTitle>
                <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
              </RecruitContent>
              <RecruitContent>
                <RecruitSubTitle>모집 시기</RecruitSubTitle>
                <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
              </RecruitContent>
              <RecruitContent>
                <RecruitSubTitle>모집 시기</RecruitSubTitle>
                <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
              </RecruitContent>
              <RecruitContent>
                <RecruitSubTitle>모집 시기</RecruitSubTitle>
                <RecruitInfoBox>3.13(월) ~ 3.27(월)</RecruitInfoBox>
              </RecruitContent>
            </RecruitContentWrapper>
          </ClubDetailCard>
          <ClubDetailCard
            style={{
              height: "403px",
            }}
          >
            <ClubDetailCardTitle>Info</ClubDetailCardTitle>
            <ClubDetailCardHr />
            <InfoContentWrapper>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
              <InfoContentRow>
                <InfoCategory>중분류</InfoCategory>
                <Info>중앙동아리</Info>
              </InfoContentRow>
            </InfoContentWrapper>
          </ClubDetailCard>
          <ClubDetailCard
            style={{
              gridColumnStart: match760 ? 1 : 2,
              gridColumnEnd: 4,
              flex: 1,

              height: match760 ? "auto" : "403px",
            }}
          >
            <ClubDetailCardTitle>About</ClubDetailCardTitle>
            <ClubDetailCardHr />
            <AboutContent>
              성균합창단은 54년의 전통을 잇는 중앙 합창 동아리입니다. 매주 화,
              목요일 7시 정기 연습과 뒤풀이로 단원간 화합을 도모하고, 매 학기
              정기 공연을 실시합니다. 가요, 뮤지컬 넘버, 영화 OST 등 다양한
              장르로 스테이지를 꾸미며, 원하는 스테이지에만 참여할 수 있어
              비교적 부담이 적습니다. 명륜과 율전을 오가며 다양한 연령대와
              학과의 사람을 만나 친목을 다질 수 있고, 체육대회, MT 등 여러
              행사를 함께합니다. 뛰어난 노래 실력, 합창 또는 노래 관련 경험이
              없어도, 학번이 높아도 괜찮습니다. 편한 마음으로 가볍게 놀러오세요!
            </AboutContent>
            <ClubPageNaviagateBtn>동아리 페이지</ClubPageNaviagateBtn>
          </ClubDetailCard>
          <ClubDetailCard
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 4,
            }}
          >
            <ClubDetailCardTitle>Activity</ClubDetailCardTitle>
            <ClubDetailCardHr />
            <DetailContent>
              {`3월 - 새내기배움터 및 입학식 공연 
            5월 - 23기 5월 정기공연 
            6월 -24기 모집마감 7월 - 방학 중 연습 시작(공식 활동) 
            9월 - 23, 24기 9월정기공연`}
            </DetailContent>
          </ClubDetailCard>
        </ClubDetailContent>
      </ClubDetailWrapper>
    </>
  );
}

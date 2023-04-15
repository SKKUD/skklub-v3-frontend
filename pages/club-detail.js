import styled from "@emotion/styled";

const ClubDetailBanner = styled.div`
  width: 100%;
  height: 378px;
  background-color: #a0211d33;
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

export default function ClubDetail() {
  return (
    <>
      <ClubDetailBanner></ClubDetailBanner>
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
        ></ClubDetailCard>
        <ClubDetailCard
          style={{
            gridColumnStart: 2,
            gridColumnEnd: 4,
            height: "403px",
          }}
        ></ClubDetailCard>
        <ClubDetailCard
          style={{
            gridColumnStart: 1,
            gridColumnEnd: 4,
          }}
        ></ClubDetailCard>
      </ClubDetailContent>
    </>
  );
}

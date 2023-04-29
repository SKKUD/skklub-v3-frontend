import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";

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

export default function InfoSection() {
  return (
    <SectionWrapper
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
    </SectionWrapper>
  );
}

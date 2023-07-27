import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionDivider, SectionTitle } from "./common";
import Link from "next/link";

const InfoContentWrapper = styled.div`
  padding-top: 12px;
  width: 100%;
  display: flex;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BoldLabel = styled.div`
  height: 30px;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  height: 30px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  display: flex;
  align-items: center;
`;

const InfoContentRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const InfoCategory = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
`;

const Info = styled.div`
  font-weight: 300;
  font-size: 1rem;
`;

export default function InfoSection({ clubData }) {
  return (
    <SectionWrapper
      style={{
        height: "443px",
      }}
    >
      <SectionTitle>동아리 정보</SectionTitle>

      <InfoContentWrapper>
        <LabelContainer style={{ marginRight: "37px" }}>
          <BoldLabel>중분류</BoldLabel>
          <BoldLabel>소속 캠퍼스</BoldLabel>
          <BoldLabel>위치</BoldLabel>
          <BoldLabel>활동인원</BoldLabel>
          <BoldLabel>모임시간</BoldLabel>
          <BoldLabel>대표자 이름</BoldLabel>
          <BoldLabel>대표자 연락처</BoldLabel>
          <BoldLabel>동아리 페이지</BoldLabel>
        </LabelContainer>
        <LabelContainer>
          <Label>{clubData.clubType}</Label>
          <Label>{clubData.campus}캠퍼스</Label>
          <Label>{clubData.roomLocation}</Label>
          <Label>{clubData.memberAmount}</Label>
          <Label>{clubData.regularMeetingTime}</Label>
          <Label>{clubData.presidentName}</Label>
          <Label>{clubData.presidentContact}</Label>
          <Label>
            <Link
              href={
                clubData.webLink1 || "https://skklub-vercel.vercel.app/seoul"
              }
            >
              {clubData.webLink1?.slice(0, 10)}...
            </Link>
          </Label>
        </LabelContainer>
        {/* <InfoContentRow>
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
        </InfoContentRow> */}
      </InfoContentWrapper>
    </SectionWrapper>
  );
}

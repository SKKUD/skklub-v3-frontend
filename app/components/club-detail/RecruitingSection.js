import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionTitle } from "./common";
import { useMediaQuery } from "@mui/material";

const RTable = styled.table`
  padding-top: 4px;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
`;

const RThead = styled.thead``;

const RTr = styled.tr`
  &:first-of-type {
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;

const RTh = styled.th`
  border: 1px solid;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  &:first-of-type {
    border-top-left-radius: 10px;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
  }
`;

const RTd = styled.td`
  border: 1px solid;
  padding-top: 33px;
  padding-bottom: 40px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  &:first-of-type {
    border-bottom-left-radius: 10px;
  }
  &:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;

export default function RecruitingSection({ clubData }) {
  const match425 = useMediaQuery("(max-width:425px)");
  return (
    <SectionWrapper
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 4,
        height: match425 ? "auto" : "307px",
      }}
    >
      <SectionTitle>모집 정보</SectionTitle>
      <RTable>
        <RThead>
          <RTr>
            <RTh>모집 시기</RTh>
            <RTh>모집 인원</RTh>
            <RTh>모집 방식</RTh>
            <RTh>활동 기간</RTh>
          </RTr>
        </RThead>
        <tbody>
          <RTr>
            <RTd>
              {clubData.recruit.recruitStartAt?.slice(0, 10)} ~{" "}
              {clubData.recruit.recruitEndAt?.slice(0, 10)}
            </RTd>
            <RTd>{clubData.recruit.recruitQuota}</RTd>
            <RTd>{clubData.recruit.recruitProcessDescription}</RTd>
            <RTd>{clubData.mandatoryActivatePeriod}</RTd>
          </RTr>
        </tbody>
      </RTable>
    </SectionWrapper>
  );
}

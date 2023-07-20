import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import { SectionDivider, SectionTitle } from "./common";

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
  border: 1px solid #fff;
  padding-top: 14px;
  padding-bottom: 14px;
  color: #fff;
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
  border: 1px solid #fff;
  padding-top: 33px;
  padding-bottom: 40px;
  color: #fff;
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

export default function RecruitingSection() {
  return (
    <SectionWrapper
      style={{
        gridColumnStart: 1,
        gridColumnEnd: 4,
        height: "307px",
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
            <RTd>asdf</RTd>
            <RTd>asdf</RTd>
            <RTd>asdf</RTd>
            <RTd>asdf</RTd>
          </RTr>
        </tbody>
      </RTable>
      {/* <SectionDivider /> */}
      {/* <RecruitContentWrapper>
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
      </RecruitContentWrapper> */}
    </SectionWrapper>
  );
}

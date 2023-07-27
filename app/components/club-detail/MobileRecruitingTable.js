import styled from "@emotion/styled";

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
    td:first-of-type {
      border-bottom-left-radius: 10px;
    }
    td:last-of-type {
      border-bottom-right-radius: 10px;
    }
  }
`;

const RTh = styled.th`
  border: 1px solid;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: Pretendard;
  font-style: normal;
  line-height: 160%;
  height: 76px;
  &:first-of-type {
    border-top-left-radius: 10px;
    font-style: normal;
    font-weight: 600;
  }
  &:last-of-type {
    border-top-right-radius: 10px;
    font-style: normal;
    font-weight: 400;
  }
`;

const RTd = styled.td`
  border: 1px solid;
  padding-top: 33px;
  padding-bottom: 40px;
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  line-height: 160%; /* 25.6px */
  font-size: 14px;

  &:first-of-type {
    font-style: normal;
    font-weight: 600;
    /* 22.4px */
  }
  &:last-of-type {
    font-style: normal;
    font-weight: 400;
  }
`;

export default function MobileRecruitingTabel({ clubData }) {
  return (
    <RTable>
      <RThead>
        <RTr>
          <RTh>모집 시기</RTh>
          <RTh>
            {clubData.recruit.recruitStartAt?.slice(0, 10)} ~{" "}
            {clubData.recruit.recruitEndAt?.slice(0, 10)}
          </RTh>
        </RTr>
      </RThead>
      <tbody>
        <RTr>
          <RTd>모집 인원</RTd>
          <RTd>{clubData.recruit.recruitQuota}</RTd>
        </RTr>
        <RTr>
          <RTd>모집 방식</RTd>
          <RTd>{clubData.recruit.recruitProcessDescription}</RTd>
        </RTr>
        <RTr>
          <RTd>활동 기간</RTd>
          <RTd>{clubData.mandatoryActivatePeriod}</RTd>
        </RTr>
      </tbody>
    </RTable>
  );
}

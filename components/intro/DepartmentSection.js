import { Card } from "@mui/material";
import styled from "@emotion/styled";

const DeptTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const DeptWrap = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DeptLeftSection = styled.div`
  width: 30%;
  display: flex;
  padding-top: 15px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
    padding-top: 0;
  }
`;
const DeptEmoji = styled.div`
  font-size: 30px;
  line-height: 30px;
  margin-right: 30px;
`;
const DeptName = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: 500;
`;

const DeptDescription = styled(Card)`
  width: 70%;
  padding: 21px 38px;
  font-size: 14px;
  line-height: 30px;
  border-radius: 12px;
  word-break: keep-all;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function DepartmentCard({ dept }) {
  return (
    <DeptWrap>
      <DeptLeftSection>
        <DeptEmoji>{dept.emoji}</DeptEmoji>
        <DeptName>{dept.name}</DeptName>
      </DeptLeftSection>
      <DeptDescription>{dept.description}</DeptDescription>
    </DeptWrap>
  );
}

export default function DepartmentSection({ data }) {
  return (
    <>
      <DeptTitle>부서 소개</DeptTitle>
      {data.department.map((dept) => (
        <DepartmentCard dept={dept} key={dept.name} />
      ))}
    </>
  );
}

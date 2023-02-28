import { Card } from "@mui/material";
import styled from "@emotion/styled";

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

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;
const DeptEmoji = styled.div`
  font-size: 40px;
  line-height: 40px;
  margin-right: 30px;
`;
const DeptName = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 40px;
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

export default function DepartmentCard({ dept }) {
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

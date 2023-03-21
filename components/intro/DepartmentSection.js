import { Card } from "@mui/material";
import ClubCard from "../cardGallery/ClubCard";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

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

export function DepartmentCard({ dept }) {
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
      <Card />
    </>
  );
}

DepartmentCard.propTypes = {
  emoji: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

DepartmentCard.defaultProps = {
  emoji: "✏️",
  name: "사무국",
  description:
    "사무국은 전체적인 동아리 활동에 필요한 상시서류를 작성하고, 신규등록 및 재등록 관련 업무를 진행합니다. 징계 및 경고 동아리를 관리하고, 동아리연합회 집행부회의, 전체동아리대표자회의 및 운영위원회의에 참석하여 회의록을 작성하고 관리합니다.",
};

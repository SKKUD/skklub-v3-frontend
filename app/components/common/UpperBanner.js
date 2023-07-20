import useURLParse from "@/hooks/useURLParse";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

const BannerWrapper = styled.div`
  width: 100vw;
  height: 236px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  margin-bottom: 1.25rem;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
`;

export default function UpperBanner() {
  const { isSuwon, type } = useURLParse();

  const convertEngTypeToKo = (type) => {
    if (type === "central-clubs") {
      return "중앙동아리";
    } else if (type === "academic-clubs") {
      return "학회";
    } else if (type === "independent-clubs") {
      return "기타동아리";
    } else if (type === "groups") {
      return "소모임";
    } else if (type === "student-org") {
      return "학생단체";
    } else {
      return "중앙동아리";
    }
  };
  return (
    <BannerWrapper>
      <div>
        <SubTitle>{isSuwon ? "율전" : "명륜"} 캠퍼스</SubTitle>
        <Title>{convertEngTypeToKo(type)}</Title>
      </div>
    </BannerWrapper>
  );
}

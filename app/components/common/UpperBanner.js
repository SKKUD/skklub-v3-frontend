import useURLParse from "@/hooks/useURLParse";
import styled from "@emotion/styled";

const BannerWrapper = styled.div`
  width: 100vw;
  height: 236px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/images/banner_suwon.jpg");
  background-position: center;
`;

const SubTitle = styled.div`
  text-align: center;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  color: #fff;
  font-family: GmarketSansBold;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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

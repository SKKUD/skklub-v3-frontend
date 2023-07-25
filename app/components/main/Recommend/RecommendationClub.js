import styled from "@emotion/styled";

const RecommendationClub = styled.div`
  position: relative;
  width: 174px;
  height: 174px;
  background-color: rgba(80, 207, 177, 1);
  border-radius: 10px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;

  /* @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    border-radius: 90px;
    font-size: 14px;
    line-height: 120%;
  } */
  @media (max-width: 425px) {
    width: 96px;
    height: 96px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default RecommendationClub;

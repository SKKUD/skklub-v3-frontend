import styled from "@emotion/styled";

const RecommendationClub = styled.div`
  position: relative;
  width: 174px;
  height: 174px;
  background-color: ${({ isSuwon, theme }) =>
    !isSuwon ? theme.palette.secondary.main : theme.palette.primary.main};
  border-radius: 10px;
  font-size: 1.75rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    border-radius: 90px;
    font-size: 14px;
    line-height: 120%;
  }
  @media (max-width: 425px) {
    width: 98px;
    height: 98px;
    border-radius: 50px;
  }
`;

export default RecommendationClub;
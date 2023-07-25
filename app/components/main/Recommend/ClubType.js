import styled from "@emotion/styled";

const ClubType = styled.div`
  margin-bottom: 20px;
  color: #303030;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 25.2px */
  letter-spacing: -0.14px;

  @media (max-width: 425px) {
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 151.5%; /* 18.18px */
    margin-bottom: 0;
    padding-bottom: 9px;
  }
`;

export default ClubType;

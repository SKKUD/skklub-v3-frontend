import styled from "@emotion/styled";

const ClubTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #303030;
  text-align: center;
  font-family: GmarketSansBold;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 32px */
  letter-spacing: -0.4px;

  @media (max-width: 425px) {
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 16.8px */
  }
`;

export default ClubTitle;

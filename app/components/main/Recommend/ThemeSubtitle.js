import styled from "@emotion/styled";

const ThemeSubtitle = styled.div`
  color: #303030;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 151.5%;
  }
`;

export default ThemeSubtitle;

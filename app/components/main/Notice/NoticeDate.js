import styled from "@emotion/styled";

const NoticeDate = styled.div`
  overflow: hidden;
  color: #dfe3e4;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.12px;
  margin-top: 0.75rem;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 151.5%;
    top: 9px;
    right: 10px;
  }
`;

export default NoticeDate;

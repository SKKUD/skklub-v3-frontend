import styled from "@emotion/styled";

const NoticeDate = styled.div`
  position: absolute;
  top: 14px;
  right: 15px;
  font-weight: 400;
  font-size: 1rem;
  color: white;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 0.7rem;
    line-height: 151.5%;
    top: 9px;
    right: 10px;
  }
`;

export default NoticeDate;

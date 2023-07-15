import styled from "@emotion/styled";

const NoticeTitle = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  width: 224px;
  margin-bottom: 0.75rem;

  @media (max-width: 425px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 151.5%;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 2px;
  }
`;

export default NoticeTitle;

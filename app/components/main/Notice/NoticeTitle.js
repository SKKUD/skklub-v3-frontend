import styled from "@emotion/styled";

const NoticeTitle = styled.div`
  overflow: hidden;
  color: #fff;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

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

import styled from "@emotion/styled";

const Hashtag = styled.div`
  padding: 5px 15px;
  /* height: 30px; */

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 99px;
  background: #fff;

  color: #303030;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 180%; /* 27px */
  letter-spacing: -0.15px;

  @media (max-width: 768px) {
    height: unset;
    padding: 1px 5px;
    font-size: 14px;
    border: 1px solid white;
    line-height: 151.5%;
  }
`;

export default Hashtag;

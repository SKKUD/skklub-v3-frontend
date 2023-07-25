import styled from "@emotion/styled";

const Hashtag = styled.div`
  padding: 5px 15px;
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
    height: 23px;
    padding: 1px 12px;
    color: #303030;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 151.5%; /* 21.21px */
    background-color: rgba(255, 229, 234, 1);
  }
`;

export default Hashtag;

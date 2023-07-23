import styled from "@emotion/styled";

const MoreBtn = styled.button`
  background-color: #f0f0f0;
  color: #303030;
  font-weight: 600;
  border: none;
  width: 72px;
  height: 39px;
  font-size: 16px;
  border-radius: 99px;

  @media (max-width: 680px) {
    width: 73px;
    height: 25px;
    font-size: 0.75rem;
    border-radius: 40px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default MoreBtn;

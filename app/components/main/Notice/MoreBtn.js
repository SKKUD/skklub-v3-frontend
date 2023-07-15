import styled from "@emotion/styled";

const MoreBtn = styled.button`
  background-color: #4e5353;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  width: 104px;
  height: 33px;
  font-size: 1.25rem;
  border-radius: 104px;

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

import { Layout, Button } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2) !important;
  position: fixed;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  color: black;
  font-size: 1.5rem;
  margin: 0;
  font-weight: lighter;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`

`

const StyledButton = styled(Button)`
  border-radius: ${(props) => props.position == "left" ? "5px 0 0 5px" : "0 5px 5px 0" };
  background-color: ${(props) => props.campus == "seoul" ? "green" : "blue" };
`;

export default function CommonHeader(props) {
  return (
    <StyledHeader>
      <Logo>SKKLUB</Logo>
      <ButtonWrapper>
        <StyledButton campus="seoul" position="left">인사캠</StyledButton>
        <StyledButton campus="suwon" position="right">자과캠</StyledButton>
      </ButtonWrapper>
    </StyledHeader>
  );
}

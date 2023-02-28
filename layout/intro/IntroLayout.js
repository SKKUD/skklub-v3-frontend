import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const LayoutBackground = styled.div`
  background-color: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.text.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function IntroLayout(props) {
  const theme = useTheme();
  return (
    <LayoutBackground>
      <h1>This is {props.campus}</h1>
      {props.children}
    </LayoutBackground>
  );
}

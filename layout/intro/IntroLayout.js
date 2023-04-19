import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const LayoutBackground = styled.div`
  background-color: ${(props) => props.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20rem;

  @media (max-width: 1024px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export default function IntroLayout(props) {
  const theme = useTheme();
  return <LayoutBackground color={props.color}>{props.children}</LayoutBackground>;
}

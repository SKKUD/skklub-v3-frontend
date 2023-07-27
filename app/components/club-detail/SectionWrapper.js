import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.paper};
  height: 225px;
  border-radius: 10px;
  padding-top: 34px;
  padding-left: 32px;
  padding-right: 30px;
  position: relative;
  padding-bottom: 2rem;

  @media (max-width: 950px) {
    grid-column-start: 1;
    grid-column-end: 4;
    height: auto;
  }
`;

export default function dSectionWrapper({ children, style }) {
  return <Wrapper style={{ ...style }}>{children}</Wrapper>;
}

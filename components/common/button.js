import { Button } from 'antd';
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red !important;
`;

export default function StyledButton() {
    return(
        <>
            <Button>
                <StyledTitle>This is a test</StyledTitle>
            </Button>
        </>
    )
}

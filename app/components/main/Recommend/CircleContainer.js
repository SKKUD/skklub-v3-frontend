import styled from "@emotion/styled";

export const CircleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 17px;
  margin-top: 1.5rem;
  padding: 0px 30px;
  @media (max-width: 1400px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    gap: 24px;
    margin-top: 2rem;
    padding: 0;
  }
  @media (max-width: 425px) {
    gap: 8px;
    margin-top: 1.5rem;
  }
`;

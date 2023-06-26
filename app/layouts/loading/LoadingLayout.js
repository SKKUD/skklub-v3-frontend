"use client";

import styled from "@emotion/styled";

const LoadingBanner = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  width: 100%;
  height: 300px;
  background-color: rgba(38, 38, 38, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingLabel = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;

export default function LoadingLayout() {
  return (
    <LoadingBanner>
      <LoadingLabel>동방 문 두드리는 중...</LoadingLabel>
    </LoadingBanner>
  );
}

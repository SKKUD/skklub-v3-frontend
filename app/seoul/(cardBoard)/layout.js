"use client";
import CampusSwitch from "@/app/components/common/CampusSwitch";
import Categories from "@/app/components/common/Categories";
import UpperBanner from "@/app/components/common/UpperBanner";
import styled from "@emotion/styled";

const MainSection = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 200px;
`;

export default function CardBoardLayout({ children }) {
  return (
    <>
      <UpperBanner />
      <MainSection>
        <Categories />
        {children}
      </MainSection>
      <CampusSwitch />
    </>
  );
}
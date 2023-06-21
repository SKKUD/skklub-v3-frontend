"use client";

import styled from "@emotion/styled";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import RecommendSection from "@/app/components/main/Recommend/RecommendSection";
import NoticeSection from "@/app/components/main/Notice/NoticeSection";
import BorrowSection from "@/app/components/main/Borrow/BorrowSection";
import MobileRecommendSection from "@/app/components/main/Recommend/MobileRecommendSection";
import MobileNoticeSection from "@/app/components/main/Notice/MobileNoticeSection";
import CampusSwitch from "@/app/components/common/CampusSwitch";
import ClubCarousel from "@/app/components/main/ClubCarousel";
import useURLParse from "@/hooks/useURLParse";
import useScreenHeight from "@/hooks/useScreenHeight";

const HomeContainer = styled.div`
  width: 100%;
  min-height: ${(props) => props.height};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    height: 600px;
  }
`;

const PromotionBanner = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${(props) =>
    props.isSuwon
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.secondary.main};
  color: #ffe195;
  font-size: 4rem;
  font-weight: 500;
  line-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  padding-bottom: 14rem;
  @media (max-width: 425px) {
    padding-bottom: 4rem;
    max-height: 600px;
  }
`;

export default function HomePageLayout() {
  const matches_768 = useMediaQuery("(max-width:768px)");
  const matches_680 = useMediaQuery("(max-width:680px)");
  const [homeContainerHeight] = useScreenHeight();
  const { isSuwon } = useURLParse();

  return (
    <>
      <HomeContainer height={`${homeContainerHeight}px`}>
        <ClubCarousel />
      </HomeContainer>
      <CampusSwitch />
      <PromotionBanner isSuwon={isSuwon}>동아리 홍보배너</PromotionBanner>
      <ContentContainer>
        {matches_768 ? <MobileRecommendSection /> : <RecommendSection />}
        {matches_680 ? <MobileNoticeSection /> : <NoticeSection />}
        <BorrowSection />
      </ContentContainer>
    </>
  );
}
import styled from "@emotion/styled";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import RecommendSection from "../../components/main/Recommend/RecommendSection";
import NoticeSection from "../../components/main/Notice/NoticeSection";
import BorrowSection from "../../components/main/Borrow/BorrowSection";
import MobileRecommendSection from "../../components/main/Recommend/MobileRecommendSection";
import MobileNoticeSection from "../../components/main/Notice/MobileNoticeSection";

const TempContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px); //모바일 적용해야함
  background-color: grey;
  text-align: center;
  line-height: 50vh;
  font-weight: 900;
`;

const PromotionBanner = styled.div`
  width: 100vw;
  height: 160px;
  background-color: #50cfb1;
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
  /* height: 1440px; */
  padding: 0 1rem;
  margin: 0 auto;
  padding-bottom: 14rem;
  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }
  /* background-color: grey; */
`;

export const useCustomMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Seoul() {
  // const matches_950 = useCustomMediaQuery(950);

  const matches_768 = useMediaQuery("(max-width:768px)");
  const matches_680 = useMediaQuery("(max-width:680px)");

  return (
    <>
      <TempContainer>오하은 화이팅</TempContainer>
      <PromotionBanner>동아리 홍보배너</PromotionBanner>
      <ContentContainer>
        {matches_768 ? <MobileRecommendSection /> : <RecommendSection />}

        {matches_680 ? <MobileNoticeSection /> : <NoticeSection />}
        <BorrowSection />
      </ContentContainer>
    </>
  );
}

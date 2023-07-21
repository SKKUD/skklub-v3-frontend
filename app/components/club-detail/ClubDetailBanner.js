"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import clubLogoImg from "@/public/assets/images/club_logo.png";
import { useMediaQuery } from "@mui/material";

const BannerWrapper = styled.div`
  width: 100%;
  height: 360px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  display: flex;
  justify-content: center;
  padding-top: 128px;
  @media (max-width: 425px) {
    height: 160px;
    padding-top: 35px;
  }
`;

const BannerContent = styled.div`
  width: 100%;
  max-width: 1050px;
  height: 174px;
  display: flex;
  gap: 30px;
`;

const InfoWrapper = styled.div`
  position: relative;
  flex: 1;
  height: 174px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const BannerMainContent = styled.div`
  margin-bottom: 1.5rem;
  display: flex;

  @media (max-width: 425px) {
    margin-bottom: 0.75rem;
  }
`;

const ClubInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.5rem;
  @media (max-width: 425px) {
    margin-left: 0.5rem;
  }
`;

const ClubSubInfoWraper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  gap: 1rem;
`;

const StatusWrapper = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

const RecruitStatus = styled.div`
  width: 74px;
  height: 34px;
  background: #008564;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  @media (max-width: 425px) {
    width: 42px;
    height: 18px;
    font-weight: 700;
    font-size: 10px;
    line-height: 107.5%;
    border-radius: 3px;
  }
`;

const PlaceInfo = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const ClubName = styled.div`
  color: #fff;
  font-family: Gmarket Sans;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 18px;

  @media (max-width: 425px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 107.5%;
  }
`;

const BannerSubContent = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  margin-top: 14px;

  @media (max-width: 425px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }
`;

const ClubPageNaviagateBtn = styled.button`
  position: absolute;
  /* bottom: 24px; */
  right: 0;
  width: 188px;
  height: 39px;
  background-color: #fff;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  overflow: hidden;
  color: #151717;
  text-align: center;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 760px) {
    position: relative;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    margin-top: 2rem;
  }
`;

export default function ClubDetailBanner() {
  const match425 = useMediaQuery("(max-width:425px)");
  return (
    <BannerWrapper>
      <BannerContent>
        <Image
          src={clubLogoImg}
          alt="CLUB_LOGO"
          placeholder="blur"
          style={{
            height: match425 ? "59px" : "174px",
            width: match425 ? "59px" : "174px",
          }}
        />
        <InfoWrapper>
          <StatusWrapper>
            <RecruitStatus>모집중</RecruitStatus>
            <PlaceInfo>명륜 캠퍼스</PlaceInfo>
          </StatusWrapper>
          <TitleWrapper>
            <ClubName>못갖춘 마디</ClubName>
          </TitleWrapper>
          <BannerSubContent>
            스클럽이 추천하는 동아리를 잘 살펴보세요!
            <br />잘 모르던 분야도 함께 활동하다보면 어느새 즐거운 동료가
            되어있을 거에요!
          </BannerSubContent>
          <ClubPageNaviagateBtn>동아리 페이지 바로가기</ClubPageNaviagateBtn>
        </InfoWrapper>
        {/* <BannerMainContent>
          <ClubInfoWrapper>
            <ClubSubInfoWraper>
              <RecruitStatus>모집중</RecruitStatus>
              <PlaceInfo>명륜 캠퍼스</PlaceInfo>
            </ClubSubInfoWraper>
            <ClubName>못갖춘 마디</ClubName>
          </ClubInfoWrapper>
        </BannerMainContent>
        <BannerSubContent>
          어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌
        </BannerSubContent> */}
      </BannerContent>
    </BannerWrapper>
  );
}

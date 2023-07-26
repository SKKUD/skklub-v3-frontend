"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import clubLogoImg from "@/public/assets/images/club_logo.png";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";

const BannerWrapper = styled.div`
  width: 100%;
  height: 360px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  display: flex;
  justify-content: center;
  padding-top: 128px;
  @media (max-width: 425px) {
    height: 258px;
    padding-top: 16px;
    flex-direction: column;
  }
`;

const BannerContent = styled.div`
  width: 100%;
  max-width: 1050px;
  height: 174px;
  display: flex;
  gap: 30px;
  @media (max-width: 425px) {
    height: 100px;
    justify-content: center;
    gap: 16px;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
  flex: 1;
  height: 174px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media (max-width: 425px) {
    height: auto;
    justify-content: end;
    padding-bottom: 9px;
  }
`;

const StatusWrapper = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
  @media (max-width: 425px) {
    gap: 8px;
  }
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
    width: 56px;
    height: 23px;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 19.2px */
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
    color: #fff;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 22.4px */
  }
`;

const ClubName = styled.div`
  color: #fff;
  font-family: GmarketSansBold;

  font-size: 2.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 18px;

  @media (max-width: 425px) {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 8px;
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
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 19.2px */
    margin-top: 12px;
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
  @media (max-width: 425px) {
    position: relative;
    margin-top: 16px;
    width: 100%;
    font-size: 0.875rem;
    height: 37px;
  }
`;

export default function ClubDetailBanner({ clubData }) {
  const match425 = useMediaQuery("(max-width:425px)");
  return (
    <BannerWrapper>
      <BannerContent>
        <Image
          src={clubLogoImg}
          alt="CLUB_LOGO"
          placeholder="blur"
          style={{
            height: match425 ? "100px" : "174px",
            width: match425 ? "100px" : "174px",
          }}
        />
        <InfoWrapper>
          <StatusWrapper>
            <RecruitStatus>
              {clubData.recruit.recruitEndAt ? "모집중" : ""}
            </RecruitStatus>
            <PlaceInfo>{clubData.campus} 캠퍼스</PlaceInfo>
          </StatusWrapper>

          <ClubName>{clubData.name}</ClubName>

          {!match425 && (
            <>
              <BannerSubContent>
                스클럽이 추천하는 동아리를 잘 살펴보세요!
                <br />잘 모르던 분야도 함께 활동하다보면 어느새 즐거운 동료가
                되어있을 거에요!
              </BannerSubContent>
              <ClubPageNaviagateBtn>
                <Link href={clubData.webLink1}>동아리 페이지 바로가기</Link>
              </ClubPageNaviagateBtn>
            </>
          )}
        </InfoWrapper>
      </BannerContent>
      {match425 && (
        <>
          <BannerSubContent>
            스클럽이 추천하는 동아리를 잘 살펴보세요!
            <br />잘 모르던 분야도 함께 활동하다보면 어느새 즐거운 동료가
            되어있을 거에요!
          </BannerSubContent>
          <ClubPageNaviagateBtn>
            <Link href={clubData.webLink1}>동아리 페이지 바로가기</Link>
          </ClubPageNaviagateBtn>
        </>
      )}
    </BannerWrapper>
  );
}

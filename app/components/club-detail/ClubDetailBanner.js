"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useClubLike from "@/hooks/useClubLike";

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

const NameWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: end;
  margin-top: 18px;
  @media (max-width: 425px) {
    margin-top: 8px;
  }
`;

const Heart = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(196, 203, 205, 1);
  color: ${(props) => (props.isLiked ? "#da5d65" : "#b7b7b7")};
  transition: color 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
const ClubName = styled.div`
  color: #fff;
  font-family: GmarketSansBold;
  font-size: 2.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 425px) {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
  width: 188px;
  height: 39px;
  position: absolute;
  right: 0;
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
  &:disabled {
    opacity: 0.3;
  }
  @media (max-width: 913px) {
    top: 0;
  }
  @media (max-width: 640px) {
    display: none;
  }
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

  const [likedClubs, addClubToList, deleteClubInList] = useClubLike();

  const handleHeartClick = (event) => {
    event.stopPropagation();

    if (likedClubs.includes(clubData.name)) {
      deleteClubInList(clubData.name);
    } else {
      addClubToList(clubData.name);
    }
  };

  return (
    <BannerWrapper>
      <BannerContent>
        <Image
          src={`data:image/png;base64,${clubData.logo.bytes}`}
          width={match425 ? 100 : 174}
          height={match425 ? 100 : 174}
          alt="CLUB_LOGO"
          style={{
            borderRadius: "10px",
          }}
        />
        <InfoWrapper>
          <StatusWrapper>
            <RecruitStatus>
              {clubData.recruit.recruitEndAt ? "모집중" : ""}
            </RecruitStatus>
            <PlaceInfo>{clubData.campus} 캠퍼스</PlaceInfo>
          </StatusWrapper>
          <NameWrapper>
            <ClubName>{clubData.name}</ClubName>
            <Heart
              isLiked={likedClubs.includes(clubData.name)}
              onClick={handleHeartClick}
            >
              <FavoriteIcon />
            </Heart>
          </NameWrapper>

          {!match425 && (
            <>
              <BannerSubContent>
                스클럽이 추천하는 동아리를 잘 살펴보세요!
                <br />잘 모르던 분야도 함께 활동하다보면 어느새 즐거운 동료가
                되어있을 거에요!
              </BannerSubContent>
              <ClubPageNaviagateBtn disabled={clubData.webLink1 ? false : true}>
                <Link
                  href={
                    clubData.webLink1 ||
                    "https://skklub-vercel.vercel.app/seoul"
                  }
                  style={{ pointerEvents: clubData.webLink1 || "none" }}
                >
                  동아리 페이지 바로가기
                </Link>
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
            <Link
              href={
                clubData.webLink1 || "https://skklub-vercel.vercel.app/seoul"
              }
            >
              동아리 페이지 바로가기
            </Link>
          </ClubPageNaviagateBtn>
        </>
      )}
    </BannerWrapper>
  );
}

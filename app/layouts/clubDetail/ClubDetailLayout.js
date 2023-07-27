"use client";
import styled from "@emotion/styled";
import RecruitingSection from "../../components/club-detail/RecruitingSection";
import InfoSection from "../../components/club-detail/InfoSection";
import AboutSection from "../../components/club-detail/AboutSection";
import ActivitySection from "../../components/club-detail/ActivitySection";
import ClubDetailBanner from "../../components/club-detail/ClubDetailBanner";
import { getClubDetail } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";
import LoadingLayout from "../loading/LoadingLayout";

const ClubDetailContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1050px;
  margin: 0 auto;
  margin-top: 3rem;
  gap: 30px;
  margin-bottom: 300px;
  @media (max-width: 1200px) {
    padding: 0 1rem;
  }
  @media (max-width: 425px) {
    gap: 24px;
    margin-top: 24px;
  }
`;

export default function ClubDetailLayout({ clubId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["club-detail", clubId],
    queryFn: () => getClubDetail(clubId),
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  });
  return isLoading ? (
    <LoadingLayout />
  ) : (
    <>
      <ClubDetailBanner clubData={data} />
      <ClubDetailContent>
        <AboutSection clubData={data} />
        <InfoSection clubData={data} />
        <ActivitySection clubData={data} />
        <RecruitingSection clubData={data} />
      </ClubDetailContent>
    </>
  );
}

"use client";

import { categoryState } from "@/utils/atoms";
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BoardWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ClubCard = styled.div`
  width: 276px;
  height: 276px;
  background-color: #303030eb;
  border-radius: 1rem;
  position: relative;
  padding-left: 22px;
  padding-right: 20px;
  padding-bottom: 18px;
  display: flex;
  align-items: end;
  @media (max-width: 930px) {
    width: 163px;
    height: 163px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const ClubCardName = styled.div`
  font-weight: 500;
  font-size: 3rem;
  line-height: 120%;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ClubCardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ClubCardType = styled.div`
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 160%;
`;

const Heart = styled.div`
  width: 22px;
  height: 20px;
  color: ${(props) => (props.isLiked ? "#da5d65" : "#b7b7b7")};
  transition: color 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  row-gap: 30px;
  column-gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    gap: 15px;
  }
`;

export default function CardBoard({ cardsData }) {
  const router = useRouter();
  const pathname = usePathname();
  const category = useRecoilValue(categoryState);

  const [likedClubs, setLikedClubs] = useState([]);
  useEffect(() => {
    setLikedClubs(
      JSON.parse(window.localStorage.getItem("likedClubs") || "[]")
    );
  }, []);

  const [_, location, a] = pathname.split("/");
  const handleCardClick = (clubId) => {
    router.push(`/${location}/${clubId}`);
  };

  const filteredClubs = (category) => {
    if (category === "전체") {
      return cardsData;
    } else {
      return cardsData.filter((card) => card.belongs === category);
    }
  };

  const handleHeartClick = (event, clubName) => {
    event.stopPropagation();
    if (likedClubs.includes(clubName)) {
      const newLikedClubs = likedClubs.filter((item) => item !== clubName);
      window.localStorage.setItem("likedClubs", JSON.stringify(newLikedClubs));
      setLikedClubs(newLikedClubs);
    } else {
      const newLikedClubs = [...likedClubs, clubName];
      window.localStorage.setItem("likedClubs", JSON.stringify(newLikedClubs));
      setLikedClubs(newLikedClubs);
    }
  };

  return (
    <BoardWrapper>
      <CardGrid>
        {filteredClubs(category).map((club) => (
          <ClubCard
            key={club.name}
            onClick={() => handleCardClick(club.clubId)}
          >
            <ClubCardName>{club.name}</ClubCardName>
            <ClubCardFooter>
              <ClubCardType>{`${club.belongs}/${club.briefActivityDescription}`}</ClubCardType>
              <Heart
                isLiked={likedClubs.includes(club.name)}
                onClick={(event) => handleHeartClick(event, club.name)}
              >
                <FavoriteIcon />
              </Heart>
            </ClubCardFooter>
          </ClubCard>
        ))}
      </CardGrid>
    </BoardWrapper>
  );
}

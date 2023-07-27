import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { usePathname, useRouter } from "next/navigation";
import useClubLike from "@/hooks/useClubLike";
import Image from "next/image";
import noticeExample from "@/public/assets/images/notice_example.png";
import { useMediaQuery } from "@mui/material";

const CustomCard = styled.div`
  width: 174px;
  border-radius: 1rem;
  position: relative;
  @media (max-width: 425px) {
    width: 164px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding: 0 10px;
`;

const ClubName = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: GmarketSansBold;

  @media (max-width: 425px) {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const Heart = styled.div`
  width: 24px;
  height: 24px;
  color: ${(props) => (props.isLiked ? "#da5d65" : "#b7b7b7")};
  transition: color 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;
const CardType = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  margin-top: 0.5rem;

  @media (max-width: 425px) {
    margin-top: 0;
    padding: 0 10px;
  }
`;

export default function ClubCard({ club }) {
  const router = useRouter();
  const pathname = usePathname();
  const [likedClubs, modifyLikedClubs] = useClubLike();
  const match425 = useMediaQuery("(max-width:425px)");

  const [_, location, a] = pathname.split("/");

  const handleCardClick = (clubId) => {
    router.push(`/${location}/${clubId}`);
  };

  const handleHeartClick = (event, clubName) => {
    event.stopPropagation();
    if (likedClubs.includes(clubName)) {
      const newLikedClubs = likedClubs.filter((item) => item !== clubName);
      modifyLikedClubs(newLikedClubs);
    } else {
      const newLikedClubs = [...likedClubs, clubName];
      modifyLikedClubs(newLikedClubs);
    }
  };

  return (
    <CustomCard key={club.name} onClick={() => handleCardClick(club.id)}>
      <Image
        src={`data:image/png;base64,${club.logo.bytes}`}
        width={match425 ? 164 : 174}
        height={match425 ? 164 : 174}
        alt="notice thumbnail"
      />
      <CardHeader>
        <ClubName>{club.name}</ClubName>
        <Heart
          isLiked={likedClubs.includes(club.name)}
          onClick={(event) => handleHeartClick(event, club.name)}
        >
          <FavoriteIcon />
        </Heart>
      </CardHeader>
      <CardType>{`${club.belongs}/${club.briefActivityDescription}`}</CardType>

      {/* <CardFooter>
        
        
      </CardFooter> */}
    </CustomCard>
  );
}

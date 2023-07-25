import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { usePathname, useRouter } from "next/navigation";
import useClubLike from "@/hooks/useClubLike";
import Image from "next/image";
import noticeExample from "@/public/assets/images/notice_example.png";

const CustomCard = styled.div`
  width: 174px;
  border-radius: 1rem;
  position: relative;
  /* background-color: #303030eb; */
  /* padding-left: 22px;
  padding-right: 20px;
  padding-bottom: 18px; */
  /* display: flex;
  align-items: end; */
  /* @media (max-width: 930px) {
    width: 163px;
    height: 163px;
  } */
  &:hover {
    cursor: pointer;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const ClubName = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CardFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const CardType = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  margin-top: 0.5rem;
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

export default function ClubCard({ club }) {
  const router = useRouter();
  const pathname = usePathname();
  const [likedClubs, modifyLikedClubs] = useClubLike();

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
        src={noticeExample}
        width={174}
        height={174}
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

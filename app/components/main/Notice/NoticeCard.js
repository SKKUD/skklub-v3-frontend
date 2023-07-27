import styled from "@emotion/styled";
import NoticeDate from "./NoticeDate";
import NoticeTitle from "./NoticeTitle";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

// const NoticeCard = styled.div`
//   width: 244px;
//   height: 346px;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
//     url(${(props) => props.imageUrl});
//   border-radius: 1rem;
//   box-shadow: inset 0 1em 40px rgba(0, 0, 0, 0.5),
//     inset 0 -1em 40px rgba(0, 0, 0, 0.5);
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   padding-left: 0.75rem;
//   align-items: start;

//   @media (max-width: 680px) {
//     width: 164px;
//     height: 164px;
//   }
// `;

const CardWrapper = styled.div`
  width: 174px;

  @media (max-width: 425px) {
    width: 164px;
  }
`;
const NoticeImg = styled(Image)`
  border-radius: 10px;
`;

const NoticeThumbnail = styled.div`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.palette.text.secondary};

  @media (max-width: 425px) {
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 16.8px */
    letter-spacing: -0.12px;
  }
`;

export default function NoticeCard({ item }) {
  const matches_425 = useMediaQuery("(max-width:425px)");
  const router = useRouter();
  const pushToNotice = (id) => {
    router.push(`/notices/${id}`);
  };
  return (
    <CardWrapper
      onClick={() => pushToNotice(item.noticeId)}
      key={item.noticeId}
    >
      <NoticeImg
        src={`data:image/png;base64,${item.thumbnail.bytes}`}
        width={matches_425 ? 174 : 164}
        height={matches_425 ? 174 : 164}
        alt="notice thumbnail"
      />
      <NoticeDate>{item.createdAt.substr(0, 10)}</NoticeDate>
      <NoticeTitle>{item.title}</NoticeTitle>
      <NoticeThumbnail>{item.content}</NoticeThumbnail>
    </CardWrapper>
  );
}

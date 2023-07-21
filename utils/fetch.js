const BASE_URL = process.env.NEXT_PUBLIC_DEV_URI;

export const getUsers = async () =>
  await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

export const getClubs = async (campus = "seoul", clubType = "", belongs = "") =>
  await fetch(
    `${BASE_URL}/club/prev?campus=${campus}&clubType=${clubType}&belongs=${belongs}`
  ).then((res) => res.json());

export const getDailyRecommendation = async (
  campus = "seoul",
  clubType = "",
  belongs = ""
) =>
  await fetch(
    `${BASE_URL}/club/random?campus=${campus}&clubType=${clubType}&belongs=${belongs}`
  ).then((res) => res.json());

export const getClubDetail = async (clubId) =>
  await fetch(`${BASE_URL}/club/${clubId}`).then((res) => res.json());

export const getClubsFromFullKeyword = async ({ name }) =>
  await fetch(`${BASE_URL}/club/search?name=${name}`).then((res) => res.json());

export const getClubsFromPartialKeyword = async ({ keyword }) =>
  await fetch(`${BASE_URL}/club/search/prevs?name=${keyword}`).then((res) =>
    res.json()
  );

export const getNoticeDetail = async (noticeId) =>{
  const response = await fetch(`${BASE_URL}/notice/${noticeId}`)
  return await response.json(); 
}

export const getNoticeThumbnailCard = async () =>{
  const response = await fetch(`${BASE_URL}/notice/prev/thumbnail`)
  return await response.json(); 
}
  

export const getNoticeListwithRole = async (auth) => {
  const response = await fetch(`${BASE_URL}/notice/prev?role=${auth}`)
  return await response.json(); 
};

export const getNoticesFromKeyword = async ({ keyword }) =>{
const response = await fetch(`${BASE_URL}/notice/prev/search/title?title=${keyword}`);
return await response.json(); 
};

  export const getNoticeFiles = async ({ filename }) => {
    const response = await fetch(`${BASE_URL}/notice/file?fileSavedName=${filename}`);
    return await response.json();
  };

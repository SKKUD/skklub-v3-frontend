const BASE_URL = process.env.DEV_URI;

export const getUsers = async () =>
  await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

const getClubs = async ({ campus = "seoul", clubType = "", belongs = "" }) =>
  await fetch(
    `${BASE_URL}/club/prev?campus=${campus}&clubType=${clubType}&belongs=${belongs}`
  ).then((res) => res.json());

const getDailyRecommendation = async ({
  campus = "seoul",
  clubType = "",
  belongs = "",
}) =>
  await fetch(
    `${BASE_URL}/club/random?campus=${campus}&clubType=${clubType}&belongs=${belongs}`
  ).then((res) => res.json());

const getClubDetail = async (clubId) =>
  await fetch(`${BASE_URL}/club/${clubId}`).then((res) => res.json());

const getClubsFromFullKeyword = async ({ name }) =>
  await fetch(`${BASE_URL}/club/search?name=${name}`).then((res) => res.json());

const getClubsFromPartialKeyword = async ({ keyword }) =>
  await fetch(`${BASE_URL}/club/search/prevs?name=${keyword}`).then((res) =>
    res.json()
  );

export const getNoticeDetail = async (noticeId) =>
  await fetch(`${BASE_URL}/notice/${noticeId}`).then((res) => res.json());

export const getNoticeThumbnailCard = async () =>
  await fetch(`${BASE_URL}/notice/prev/thumbnail`).then((res) => res.json());

export const getNoticeListwithRole = async ({ auth }) =>
  await fetch(`${BASE_URL}/notice/prev?role=${auth}`).then((res) => res.json());

export const getNoticesFromKeyword = async ({ keyword }) =>
  await fetch(`${BASE_URL}/notice/prev/search/title?title=${keyword}`).then((res) =>
    res.json()
  );

export const getNoticeFiles = async ({ filename }) =>
  await fetch(`${BASE_URL}/notice/file?fileSavedName=${filename}`).then((res) =>
    res.json()
  );
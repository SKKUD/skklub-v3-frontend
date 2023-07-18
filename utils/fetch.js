const BASE_URL = "http://api.dev.skklub.com";

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

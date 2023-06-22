const BASE_URL = "www.baseURL";

export const getUsers = async () =>
  await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );

const getClubs = async ({ campus = "seoul", clubType = "", belongs = "" }) =>
  await fetch(
    `${BASE_URL}/club/prev?campus=${campus}&clubType=${clubType}&belongs=${belongs}`
  ).then((res) => res.json());
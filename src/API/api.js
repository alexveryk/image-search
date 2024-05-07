import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "32765009-e8a3776ebed1bf95519eebcf0";
const perPage = 12;

export const getImage = async (searchValue, page) => {
  const response = await axios.get(
    `?key=${KEY}&q=${searchValue}&page=${page}&perPage=${perPage}`
  );
  return response;
};

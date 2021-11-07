import axios from "axios";

export const api = axios.create({ baseURL: "https://randomuser.me/api" });

export const getPacientsFromAPI = async ({ page, numberOfItems }) => {
  const response = await api.get("/", {
    params: { results: numberOfItems, page: page, seed: "jaba" },
  });

  const { info, results } = response.data;

  return {
    data: results.sort((a, b) => a.name.first > b.name.first),
    actualPage: info.page,
    perPage: info.results,
  };
};

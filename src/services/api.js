import axios from "axios";

export const api = axios.create({ baseURL: "https://randomuser.me/api" });

export const getPacientsFromAPI = async (items = 500) => {
  const response = await api.get("/", {
    params: { results: items, seed: "jaba" },
  });

  const { info, results } = response.data;

  return { data: results, pageActual: info.page, perPage: info.results };
};

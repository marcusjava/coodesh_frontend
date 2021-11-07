import React, { useEffect, useState, useContext } from "react";
import { getPacientsFromAPI } from "../services/api";
import Fuse from "fuse.js";

const PacientContext = React.createContext();

export const usePacient = () => useContext(PacientContext);

export const PacientProvider = ({ children }) => {
  const [pacients, setPacients] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    async function getClients() {
      setLoading(true);
      const { data, actualPage } = await getPacientsFromAPI({
        page: page,
        numberOfItems: 500,
      });
      setPacients(data);
      setPage(actualPage);
      setLoading(false);
    }
    getClients();
  }, [page]);

  const searchPacients = (term) => {
    const fuse = new Fuse(pacients, {
      keys: ["name.first", "name.last", "nat"],
      includeScore: true,
    });

    const results = fuse.search(term).map((search) => search.item);
    setSearch(results);
  };

  const getPacient = async (id) => {
    setLoading(true);
    //como a api não possui endpoint para buscar um usuario especifico...
    const { data } = await getPacientsFromAPI({ numberOfItems: 5000 });

    const pacient = data.filter(({ login }) => login.uuid === id);
    setLoading(false);
    return pacient[0];
  };

  const sortPacientNames = () => {
    if (sort === "asc") {
      setSort("desc");
      return pacients.sort((a, b) => a.name.first < b.name.first);
    }

    if (sort === "desc") {
      setSort("asc");
      return pacients.sort((a, b) => a.name.first > b.name.first);
    }
  };

  return (
    <PacientContext.Provider
      value={{
        pacients,
        loading,
        searchPacients,
        search,
        getPacient,
        sort,
        sortPacientNames,
      }}
    >
      {children}
    </PacientContext.Provider>
  );
};

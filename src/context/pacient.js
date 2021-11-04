import React, { useEffect, useState, useContext } from "react";
import { getPacientsFromAPI } from "../services/api";
import Fuse from "fuse.js";

const PacientContext = React.createContext();

export const usePacient = () => useContext(PacientContext);

export const PacientProvider = ({ children }) => {
  const [pacients, setPacients] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getClients() {
      setLoading(true);
      const { data } = await getPacientsFromAPI();
      setPacients(data);
      setLoading(false);
    }
    getClients();
  }, []);

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
    const { data } = await getPacientsFromAPI();

    const pacient = data.filter(({ login }) => login.uuid === id);

    setLoading(false);

    return pacient[0];
  };

  return (
    <PacientContext.Provider
      value={{
        pacients,

        loading,
        searchPacients,
        search,
        getPacient,
      }}
    >
      {children}
    </PacientContext.Provider>
  );
};

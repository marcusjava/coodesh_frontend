import React from "react";
import TablePacients from "../../components/Table";
import { usePacient } from "../../context/pacient";
import Spinner from "../../components/Spinner";
import { Container, Content } from "./styles/home";
import Spinner2 from "../../components/Spinner2";
import Search from "../../components/Search";
import PaginationTable from "../../components/Pagination";

function Home() {
  const { pacients, search, loading, searchPacients } = usePacient();

  /*  if (loading) {
    return <Spinner />;
  }
 */
  const tableItens = search.length ? search : pacients;

  return (
    <Container>
      <Content>
        <Search searchPacients={searchPacients} />
        <PaginationTable
          data={tableItens}
          RenderComponent={TablePacients}
          pageLimit={5}
          dataLimit={10}
        />
      </Content>
    </Container>
  );
}

export default Home;

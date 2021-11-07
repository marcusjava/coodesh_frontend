import React from "react";
import TablePacients from "../../components/Table";
import { usePacient } from "../../context/pacient";
import { Container, Content } from "./styles/home";
import Search from "../../components/Search";
import PaginationTable from "../../components/Pagination";

function Home() {
  const { pacients, search } = usePacient();

  const tableItens = search.length ? search : pacients;

  return (
    <Container>
      <Content>
        <Search />
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

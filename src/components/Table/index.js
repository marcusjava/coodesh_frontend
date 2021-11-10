import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

import { Input, FormGroup } from "reactstrap";
import { BsLink } from "react-icons/bs";
import { IconContext } from "react-icons";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  StyledTable,
  THead,
  TBody,
  TFoot,
  TH,
  TR,
  TD,
  ActionButton,
  Thumbnail,
  Button,
  Container,
} from "./styles/table";
import Spinner2 from "../Spinner2";
import DetailsModal from "../Modal";
import { usePacient } from "../../context/pacient";

const Table = ({ children, ...rest }) => {
  return <StyledTable {...rest}>{children}</StyledTable>;
};

Table.Head = ({ children, ...rest }) => {
  return <THead {...rest}>{children}</THead>;
};

Table.Body = ({ children, ...rest }) => {
  return <TBody {...rest}>{children}</TBody>;
};

Table.Foot = ({ children, ...rest }) => {
  return <TFoot {...rest}>{children}</TFoot>;
};

Table.TH = ({ children, ...rest }) => {
  return <TH {...rest}>{children}</TH>;
};

Table.TR = ({ children, ...rest }) => {
  return <TR {...rest}>{children}</TR>;
};

Table.TD = ({ children, ...rest }) => {
  return <TD {...rest}>{children}</TD>;
};

function TablePacients({ data }) {
  const [pacients, setPacients] = useState([]);

  const { sort, sortPacientNames } = usePacient();

  useEffect(() => {
    setPacients(data);
  }, [data]);

  const { loading } = usePacient();

  const filterGender = (e) => {
    const { value } = e.target;
    setPacients(data);
    if (value === "male") {
      setPacients((pacients) =>
        pacients.filter((pacient) => pacient.gender === "male")
      );
    }
    if (value === "female") {
      setPacients((pacients) =>
        pacients.filter((pacient) => pacient.gender === "female")
      );
    }
  };

  return (
    <Container>
      <Table data-testid="table_pacients">
        <Table.Head>
          <Table.TR>
            <Table.TH>Foto</Table.TH>
            <Table.TH>
              Nome
              {sort === "asc" ? (
                <Button onClick={sortPacientNames} data-testid="asc">
                  <IconContext.Provider value={{ style: { fontSize: "25px" } }}>
                    <AiOutlineSortAscending />
                  </IconContext.Provider>
                </Button>
              ) : (
                <Button onClick={sortPacientNames} data-testid="desc">
                  <IconContext.Provider value={{ style: { fontSize: "25px" } }}>
                    <AiOutlineSortDescending />
                  </IconContext.Provider>
                </Button>
              )}
            </Table.TH>
            <Table.TH style={{ overflow: "hidden" }}>
              Genero
              <FormGroup>
                <Input
                  bsSize="sm"
                  type="select"
                  style={{ width: "100px" }}
                  onChange={filterGender}
                >
                  <option value="all">Ver Todos</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </Input>
              </FormGroup>
            </Table.TH>
            <Table.TH>Nasc.</Table.TH>
            <Table.TH>Idade</Table.TH>
            <Table.TH>Nacionalidade</Table.TH>
            <Table.TH>Ações</Table.TH>
          </Table.TR>
        </Table.Head>
        <Table.Body>
          {pacients.length === 0 ? (
            <Table.TR>
              <Table.TD rowspan="3">
                <h2>Sem resultados</h2>
              </Table.TD>
            </Table.TR>
          ) : (
            pacients?.map((item) => (
              <Table.TR key={item.dob.date}>
                <Table.TD>
                  <Thumbnail src={item.picture.thumbnail} alt="Foto perfil" />
                </Table.TD>
                <Table.TD>{`${item.name.first} ${item.name.last}`}</Table.TD>
                <Table.TD>
                  {item.gender === "female" ? "Feminino" : "Masculino"}
                </Table.TD>
                <Table.TD>{dayjs(item.dob.date).format("DD/MM/YYYY")}</Table.TD>
                <Table.TD>{item.dob.age}</Table.TD>
                <Table.TD>{item.nat}</Table.TD>
                <Table.TD>
                  <DetailsModal detail={item} />
                  <ActionButton
                    to={`/${item.login.uuid}`}
                    data-testid="detail_button"
                  >
                    <IconContext.Provider
                      value={{ style: { fontSize: "25px", color: "black" } }}
                    >
                      <BsLink />
                    </IconContext.Provider>
                  </ActionButton>
                </Table.TD>
              </Table.TR>
            ))
          )}
        </Table.Body>
      </Table>

      <Spinner2 show={loading} />
    </Container>
  );
}

export default TablePacients;

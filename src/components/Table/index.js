import dayjs from "dayjs";
import React from "react";
import { BiDetail } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import { IconContext } from "react-icons";

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
  Container,
} from "./styles/table";
import { Button } from "reactstrap";
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
  const { loading } = usePacient();
  if (!data) {
    return (
      <Container>
        <h2> Sem resultados</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Table>
        <Table.Head>
          <Table.TR>
            <Table.TH>Foto</Table.TH>
            <Table.TH>Nome</Table.TH>
            <Table.TH>Genero</Table.TH>
            <Table.TH>Nasc.</Table.TH>
            <Table.TH>Idade</Table.TH>
            <Table.TH>Nacionalidade</Table.TH>
            <Table.TH>Ações</Table.TH>
          </Table.TR>
        </Table.Head>
        <Table.Body>
          {data?.map((item) => (
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
                <ActionButton to={`/${item.login.uuid}`} target="_blank">
                  <IconContext.Provider
                    value={{ style: { fontSize: "25px", color: "black" } }}
                  >
                    <BsLink />
                  </IconContext.Provider>
                </ActionButton>
              </Table.TD>
            </Table.TR>
          ))}
        </Table.Body>
      </Table>
      <Spinner2 show={loading} />
    </Container>
  );
}

export default TablePacients;

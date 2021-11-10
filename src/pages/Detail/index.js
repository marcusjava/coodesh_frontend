import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import dayjs from "dayjs";

import { Thumbnail, Container, Title } from "./styles/detail";
import { useParams } from "react-router-dom";
import { usePacient } from "../../context/pacient";

// import { Container } from './styles';

function Detail() {
  const { pacients } = usePacient();

  const { id } = useParams();
  const [detail, setDetail] = useState(
    () => pacients.filter(({ login }) => login.uuid === id)[0]
  );

  return (
    <Modal isOpen={true} centered={true} size="lg">
      <ModalBody>
        <Container>
          <Thumbnail src={detail.picture.large} alt="profile picture" />
          <Title>{`${detail.name.first} ${detail.name.last}`}</Title>
          <h5>ID: {detail.login.uuid}</h5>
          <h5>Email: {detail.email}</h5>
          <h5>Contato: {detail.cell}</h5>
          <h5>
            Endereço: {`${detail.location.city} - ${detail.location.state}`}
          </h5>
          <h5>Nacionalidade: {detail.nat}</h5>
          <h5>Sexo: {detail.gender === "female" ? "Feminino" : "Masculino"}</h5>
          <h5>Nasc: {dayjs(detail.dob.date).format("DD/MM/YYYY")}</h5>
          <h5>Idade: {detail.dob.age}</h5>
        </Container>
      </ModalBody>
    </Modal>
  );
}

export default Detail;

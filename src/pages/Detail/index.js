import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IconContext } from "react-icons";
import { BiDetail } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import dayjs from "dayjs";

import {
  Button,
  CloseButton,
  Thumbnail,
  Container,
  Title,
} from "./styles/detail";
import { useParams } from "react-router-dom";
import { usePacient } from "../../context/pacient";
import Spinner from "../../components/Spinner2";

// import { Container } from './styles';

function Detail() {
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);

  const { pacients, getPacient, loading } = usePacient();

  const { id } = useParams();

  useEffect(() => {
    async function getDetail() {
      const pacient = await getPacient(id);
      setDetail(pacient);
      setShow(true);
    }

    getDetail();
  }, [id]);

  return loading || Object.keys(detail).length === 0 ? (
    <Spinner />
  ) : (
    <Modal isOpen={show} centered fullscreen size="lg">
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

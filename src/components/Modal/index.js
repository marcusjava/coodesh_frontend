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
} from "./styles/modal";

function DetailsModal({ detail }) {
  const [show, setShow] = useState(false);

  const {
    login: { uuid },
    name,
    gender,
    dob,
    cell,
    location,
    nat,
    email,
    picture: { large },
  } = detail;

  console.log(detail);

  return (
    <>
      <Button onClick={() => setShow(true)}>
        <IconContext.Provider value={{ style: { fontSize: "25px" } }}>
          <BiDetail />
        </IconContext.Provider>
      </Button>
      <Modal isOpen={show} centered={true} fullScreen={true} size="lg">
        <ModalBody>
          <Container>
            <CloseButton className="close" onClick={() => setShow(false)}>
              <AiOutlineClose />
            </CloseButton>
            <Thumbnail src={large} alt="profile picture" />
            <Title>{`${name.first} ${name.last}`}</Title>
            <h5>ID: {uuid}</h5>
            <h5>Email: {email}</h5>
            <h5>Contato: {cell}</h5>
            <h5>Endereço: {`${location.city} - ${location.state}`}</h5>
            <h5>Nacionalidade: {nat}</h5>
            <h5>Sexo: {gender === "female" ? "Feminino" : "Masculino"}</h5>
            <h5>Nasc: {dayjs(dob.date).format("DD/MM/YYYY")}</h5>
            <h5>Idade: {dob.age}</h5>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
}

export default DetailsModal;

import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import { IconContext } from "react-icons";
import { BiDetail } from "react-icons/bi";
import { BsLink } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import dayjs from "dayjs";

import {
  Button,
  CloseButton,
  Thumbnail,
  Container,
  Title,
  LinkButton,
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

  return (
    <>
      <Button onClick={() => setShow(true)} data-testid="modal">
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
            <LinkButton to={`/${uuid}`}>
              <IconContext.Provider
                value={{ style: { fontSize: "25px", color: "black" } }}
              >
                <BsLink />
              </IconContext.Provider>
            </LinkButton>
          </Container>
        </ModalBody>
      </Modal>
    </>
  );
}

export default DetailsModal;

import { Divisor } from "../../contents/div";
import { SobHeader } from "../../contents/sobheader";

import {
  Modal,
  ModalOverlay,   
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { List, X } from "@phosphor-icons/react";
import React from "react";

const QuinkMenu = {
  HOME: {
    local: "/",
    alt: "Inicio",
    title: "Inicio",
  },
  DISCOVERY: {
    local: "/discovery/",
    alt: "Descobrir",
    title: "Descobrir",
  },
  CONTACT: {
    local: "/contato",
    alt: "Entrar em contato",
    title: "Contato",
  },
};

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SobHeader />
      <Divisor />
      <section className="_six">
        <h1>
          GC<b>'</b>S
        </h1>
        <nav>
          {Object.entries(QuinkMenu).map(([key, value]) => {
            return (
              <>
                <a
                  key={key}
                  href={value.local}
                  title={value.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value.title}
                </a>
              </>
            );
          })}
        </nav>
        <button type="button" title="Menu" name="Menu" onClick={onOpen}>
          <List />
        </button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="_menu">
            <ModalHeader>
              <button type="button" title="Fechar" name="Fechar" onClick={onClose}>
                <X />
              </button>
            </ModalHeader>
            <ModalBody as="nav" className="_burge">
              {Object.entries(QuinkMenu).map(([key, value]) => {
                return (
                  <>
                    <a
                      key={key}
                      href={value.local}
                      title={value.alt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value.title}
                    </a>
                  </>
                );
              })}
            </ModalBody>
          </ModalContent>
        </Modal>
      </section>
      <Divisor />
    </>
  );
}

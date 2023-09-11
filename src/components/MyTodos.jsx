import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import useLocalStorage from "../useLocalStorage";

const MyTodos = ({ todos, deleteFunc }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editInput, setEditinput] = useState();
  console.log(editInput, "editInput");
  const [listValue, setListValue] = useLocalStorage("list", []);
  const myArr = todos ?? [];
  return myArr.map((obj) => {
    return (
      <>
        <AnimatePresence key={obj.id}>
          <Flex justifyContent={"space-between"}>
            <Box
              as={motion.div}
              layoutId={obj.id}
              initial={{ scale: 0 }}
              exit={{ scale: 0 }}
              animate={{ scale: 0.9 }}
            >
              <Text>{obj.text}</Text>
            </Box>
            <Flex style={{ gap: 8 }}>
              {/* <AiOutlineEdit onClick={onOpen} /> */}
              <AiOutlineDelete
                onClick={() => {
                  deleteFunc(obj.id);
                }}
              />
            </Flex>
          </Flex>
          <Divider />
        </AnimatePresence>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                value={editInput?.text}
                onChange={(e) => {
                  setEditinput(e.target.value);
                }}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Edit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  });
};

export default MyTodos;
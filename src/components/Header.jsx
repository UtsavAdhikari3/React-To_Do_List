import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex justifyContent={"center"}>
      <Heading size="4xl" fontFamily="title" fontWeight="extrabold">
        To do list
      </Heading>
    </Flex>
  );
};

export default Header;

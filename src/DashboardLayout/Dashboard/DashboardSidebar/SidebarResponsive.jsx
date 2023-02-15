import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";

export const SidebarResponsive = ({ onOpen }) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        bg={"gray.600"}
        borderBottomWidth="1px"
        borderBottomColor={"gray.600"}
        justifyContent="flex-start"
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          // icon={<FiMenu />}
        />

        <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
    </>
  );
};

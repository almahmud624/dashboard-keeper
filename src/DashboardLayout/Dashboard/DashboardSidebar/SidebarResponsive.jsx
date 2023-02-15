import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "../../../Assets/logo.png";

export const SidebarResponsive = ({ onOpen }) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        alignItems="center"
        pb={5}
        borderBottomWidth="1px"
        borderBottomColor={"gray.100"}
        justifyContent="flex-start"
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<HiMenuAlt2 />}
        />

        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={2}
          ml={5}
          alignItems={"center"}
          width={"full"}
        >
          <Image src={logo} alt="logo" />
          <Text fontSize="2xl" fontWeight="semibold" color={"gray.900"}>
            Keeper
          </Text>
        </Box>
      </Flex>
    </>
  );
};

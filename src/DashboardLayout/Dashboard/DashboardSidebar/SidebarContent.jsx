import { Box, CloseButton, Flex, Image, Link, Text } from "@chakra-ui/react";
import logo from "../../../Assets/logo.png";

const navItems = ["home", "red"];
export const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <>
      <Box
        bg={"white"}
        borderRight="1px"
        borderRightColor={"gray"}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"full"}
          >
            <Image src={logo} alt="logo" />
            <Text fontSize="2xl" fontWeight="semibold" color={"gray.900"}>
              Keeper
            </Text>
          </Box>

          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {navItems.map((item) => (
          <Link
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex
              align="center"
              p="4"
              mx="4"
              borderRadius="lg"
              role="group"
              cursor="pointer"
              _hover={{
                bg: "cyan.400",
                color: "white",
              }}
              //   {...rest}
            >
              {/* {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: "white",
                }}
                as={icon}
              />
            )} */}
              {item}
            </Flex>
          </Link>
        ))}
      </Box>
    </>
  );
};

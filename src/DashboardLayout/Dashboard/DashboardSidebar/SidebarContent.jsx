import {
  Box,
  CloseButton,
  Flex,
  Image,
  Link,
  Text,
  Icon,
} from "@chakra-ui/react";
import logo from "../../../Assets/logo.png";
import logo2 from "../../../Assets/logo2.png";
import { AiFillAccountBook } from "react-icons/ai";
import { HiTicket } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { VscCalendar } from "react-icons/vsc";
import { IoIosNotifications } from "react-icons/io";
import { RiSettings4Fill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { HiRectangleGroup } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";

const navItems = [
  HiRectangleGroup,
  AiFillAccountBook,
  MdInsertChart,
  HiTicket,
  CgFileDocument,
  VscCalendar,
  FiActivity,
  IoIosNotifications,
  RiSettings4Fill,
];
export const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <>
      <Box
        bg={"white"}
        w={{ base: "full", md: 28 }}
        pt={5}
        pos="absolute"
        top={{ base: 0, md: 10 }}
        left={{ base: 0, md: 10 }}
        borderRadius={"xl"}
        h="full"
        {...rest}
      >
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          justifyContent="space-between"
          mb={10}
        >
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
              justifyContent={{ base: "left", md: "center" }}
              p="4"
              mx="4"
              role="group"
              cursor="pointer"
              _hover={{
                bgGradient: "linear(to-r, #ACA9FF, #FFFFFF)",
                color: "#605BFF",
              }}
              onClick={onClose}
            >
              <Icon
                fontSize="24"
                color={"gray.500"}
                _groupHover={{
                  color: "#605BFF",
                }}
                as={item}
              />
            </Flex>
          </Link>
        ))}
        <Flex flexDir={"column"} alignItems={"center"} mt={16} rowGap={5}>
          <Image src={logo2} alt="logo" />
          <Icon
            fontSize="24"
            color={"gray.500"}
            _hover={{
              color: "#605BFF",
            }}
            as={IoLogOut}
            cursor={"pointer"}
          />
        </Flex>
      </Box>
    </>
  );
};

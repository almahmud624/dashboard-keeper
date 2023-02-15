import {
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { DashboardContent } from "../DashboardContent/DashboardContent";
import { SidebarContent } from "./SidebarContent";
import { SidebarResponsive } from "./SidebarResponsive";

export const DashboardSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH="100vh" bg={"#F5F5F5"}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* for responsive */}
        <SidebarResponsive onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <DashboardContent />
        </Box>
      </Box>
    </>
  );
};

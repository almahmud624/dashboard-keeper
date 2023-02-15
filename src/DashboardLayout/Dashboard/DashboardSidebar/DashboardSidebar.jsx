import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { DashboardContent } from "../DashboardContent/DashboardContent";
import { SidebarContent } from "./SidebarContent";
import { SidebarResponsive } from "./SidebarResponsive";

export const DashboardSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH="100vh" bg={"#FAFAFB"} mt={3}>
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
        <SidebarResponsive onOpen={onOpen} />
        <Box ml={{ base: 0, md: 40 }} p="4">
          <DashboardContent />
        </Box>
      </Box>
    </>
  );
};

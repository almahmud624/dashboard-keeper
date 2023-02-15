import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const TotalAmountSection = () => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={10}
        gap={5}
      >
        <Box
          bg={"#EBEAFB"}
          color={"#605BFF"}
          w={"full"}
          textAlign={"center"}
          py={3}
          borderRadius={"xl"}
        >
          <Text>Salary</Text>
          <Text fontSize={{ base: "20px", md: "38px", lg: "48px" }}>
            <span>₹</span>21,00,000
          </Text>
        </Box>
        <Box
          bg={"#E7F0E9"}
          color={"#50A260"}
          w={"full"}
          textAlign={"center"}
          py={3}
          borderRadius={"xl"}
        >
          <Text>Total Equity</Text>
          <Text fontSize={{ base: "20px", md: "48px" }}>
            <span>₹</span>18,00,000
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default TotalAmountSection;

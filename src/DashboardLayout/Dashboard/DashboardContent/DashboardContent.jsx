import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { RiSearchFill } from "react-icons/ri";
import { FilterSection } from "./FilterSection/FilterSection";

export const DashboardContent = () => {
  return (
    <Container maxW="98%">
      <Flex>
        <Box color={"gray.900"}>
          <Heading as="h6" size="lg" fontWeight={"semibold"}>
            Benchmarking Survey
          </Heading>
          <Text color={"gray.600"} mt={"2"}>
            Keeper is 100% give-to-get. Securely contribute to anonymized data
            to unlock lifelong access to Keeper’s real-time bechmarking data
            portal.
          </Text>
        </Box>
        <Box>
          <InputGroup bg={"white"} color="gray.500" borderRadius={"md"}>
            <Input
              placeholder="Search"
              color={"red"}
              _placeholder={{ color: "gray.500" }}
            />
            <InputRightElement children={<RiSearchFill />} />
          </InputGroup>
        </Box>
      </Flex>
      <FilterSection />
    </Container>
  );
};

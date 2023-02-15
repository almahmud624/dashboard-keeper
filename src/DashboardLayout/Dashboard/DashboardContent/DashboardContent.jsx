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
import BasePayTable from "../../BasePayTable/BasePayTable";
import { FilterSection } from "./FilterSection/FilterSection";
import TotalAmountSection from "./TotalAmountSection/TotalAmountSection";
import { VariablePayTable } from "./VariablePayTable/VariablePayTable";

const demoTableData = [
  {
    valuation: "0-25M",
    TH10: "₹17,00,000",
    TH25: "₹21,00,000",
    TH50: "₹23,00,000",
    TH75: "₹23,00,000",
    TH90: "₹23,00,000",
    Average: "₹23,00,000",
  },
  {
    valuation: "25-50M",
    TH10: "₹17,00,000",
    TH25: "₹21,00,000",
    TH50: "₹23,00,000",
    TH75: "₹23,00,000",
    TH90: "₹23,00,000",
    Average: "₹23,00,000",
  },
  {
    valuation: "50-100M",
    TH10: "₹17,00,000",
    TH25: "₹21,00,000",
    TH50: "₹23,00,000",
    TH75: "₹23,00,000",
    TH90: "₹23,00,000",
    Average: "₹23,00,000",
  },
  {
    valuation: "100-500M",
    TH10: "₹17,00,000",
    TH25: "₹21,00,000",
    TH50: "₹23,00,000",
    TH75: "₹23,00,000",
    TH90: "₹23,00,000",
    Average: "₹23,00,000",
  },
  {
    valuation: "500M+",
    TH10: "₹17,00,000",
    TH25: "₹21,00,000",
    TH50: "₹23,00,000",
    TH75: "₹23,00,000",
    TH90: "₹23,00,000",
    Average: "₹23,00,000",
  },
];

export const DashboardContent = () => {
  return (
    <Container maxW="98%">
      <Flex flexDir={{ base: "column-reverse", md: "row" }}>
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
        <Box my={{ base: "10px", md: 0 }}>
          <InputGroup bg={"white"} color="gray.500" borderRadius={"md"}>
            <Input
              placeholder="Search"
              color={"gray.800"}
              border={0}
              _placeholder={{ color: "gray.500" }}
            />
            <InputRightElement children={<RiSearchFill />} />
          </InputGroup>
        </Box>
      </Flex>
      <FilterSection />
      <TotalAmountSection />
      <BasePayTable demoTableData={demoTableData} />
      <VariablePayTable demoTableData={demoTableData} />
    </Container>
  );
};

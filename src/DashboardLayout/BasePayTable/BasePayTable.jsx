import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./BasePayTable.css";

const BasePayTable = ({ demoTableData }) => {
  return (
    <>
      <Box mt={16} bg={"#ffffff"} py={5} borderRadius={"xl"}>
        <Flex justifyContent={"space-between"} mb={5} px={6}>
          <Text fontWeight={"semibold"}>Base Pay</Text>
          <Text as={"button"} color={"#716DFF"}>
            See More
          </Text>
        </Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Valuation</Th>
                <Th>10TH</Th>
                <Th>25TH</Th>
                <Th>50TH</Th>
                <Th>75TH</Th>
                <Th>90TH</Th>
                <Th>Average</Th>
              </Tr>
            </Thead>
            <Tbody>
              {demoTableData.map((data) => (
                <Tr key={Math.random()}>
                  <Td>{data.valuation}</Td>
                  <Td>{data.TH10}</Td>
                  <Td>{data.TH25}</Td>
                  <Td>{data.TH50}</Td>
                  <Td>{data.TH75}</Td>
                  <Td>{data.TH90}</Td>
                  <Td>{data.Average}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default BasePayTable;

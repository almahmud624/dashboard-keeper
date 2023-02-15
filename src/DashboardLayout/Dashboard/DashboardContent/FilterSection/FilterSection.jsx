import { Box, Flex, Select, Text } from "@chakra-ui/react";

const filterItems = [
  { name: "Industry", value: ["Fintech"] },
  { name: "Choose Company Size", value: ["100-250"] },
  { name: "Choose Location", value: ["Bangalore"] },
  { name: "Choose Job Department", value: ["Product Mgmt."] },
  { name: "Choose Level", value: ["Mid"] },
];
export const FilterSection = () => {
  return (
    <>
      <Flex mt={5} justifyContent={"space-between"}>
        {filterItems.map((item) => (
          <Box bg={"white"} borderRadius={"md"} p={1} px={2}>
            <Text fontSize={"12px"} color={"#030229"}>
              {item.name}
            </Text>
            <Select
              variant="flushed"
              placeholder={item.value[0]}
              border={0}
              color={"#030229"}
              size="md"
              width={"150px"}
              fontWeight={"semibold"}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
          </Box>
        ))}
      </Flex>
    </>
  );
};

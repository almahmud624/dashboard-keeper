import { Box, Flex, Select, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

const filterItems = [
  { name: "Industry", value: ["Fintech"] },
  { name: "Choose Company Size", value: ["100-250"] },
  { name: "Choose Location", value: ["Bangalore"] },
  { name: "Choose Job Department", value: ["Product Mgmt."] },
  { name: "Choose Level", value: ["Mid"] },
];
const tabMenu = ["10TH", "25TH", "50TH", "75TH", "90TH"];
export const FilterSection = () => {
  return (
    <>
      <Flex
        mt={5}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={{ base: "10px", md: 0 }}
      >
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
              width={{ base: "full", md: "100px", lg: "150px" }}
              fontWeight={"semibold"}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
          </Box>
        ))}
      </Flex>
      <Tabs variant="unstyled" mt={10}>
        <TabList justifyContent={"space-between"}>
          {tabMenu.map((item) => (
            <Tab
              key={Math.random()}
              bg={"#fff"}
              _selected={{ color: "white", bg: "#605BFF" }}
              width={"full"}
              overflow={"hidden"}
            >
              {item}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </>
  );
};

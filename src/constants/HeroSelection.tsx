import { Box, Flex, Select, Text, useColorModeValue } from "@chakra-ui/react";
import IconPin from "../assets/icons/PinIcon";

const HeroSelection = () => {
  return (
    <Box
      className={`md:grid-cols-4 grid grid-cols-1 rounded-md p-4 mt-8 w-full ${useColorModeValue(
        "border-[#1B98E0]",
        "border-[#A2FAA3]"
      )} border-4`}
    >
      <Flex>
        <Box className="bg-gray-500 flex items-center justify-center p-2 rounded-md">
          <IconPin />
        </Box>
        <Box>
          <Text>Location</Text>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Flex>
      <Flex>
        Price
        <Box>
          <Text>Location</Text>
        </Box>
      </Flex>
      <Flex>
        3{" "}
        <Box>
          <Text>2</Text>
        </Box>
      </Flex>
      <Flex>4</Flex>
    </Box>
  );
};

export default HeroSelection;

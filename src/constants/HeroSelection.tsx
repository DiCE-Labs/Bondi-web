import { Box, Flex, Select, Text, useColorModeValue } from "@chakra-ui/react";
import IconPin from "../assets/icons/PinIcon";
import IconDollar from "../assets/icons/Dollar";

const HeroSelection = () => {
  return (
    <Box
      className={`md:grid-cols-4 grid grid-cols-1 rounded-md p-4 mt-8 w-full ${useColorModeValue(
        "border-[#1B98E0]",
        "border-[#A2FAA3]"
      )} border-4`}
    >
      <Flex>
        <Box className="bg-gray-300 flex items-center justify-center p-2 rounded-md">
          <IconPin />
        </Box>
        <Box>
          <Text>Location</Text>
          <Select variant={"unstyled"}>
            <option value="option1">Lusaka</option>
            <option value="option2">Mansa</option>
            <option value="option3">Chipata</option>
          </Select>
        </Box>
      </Flex>
      <Flex>
        <IconDollar />
        <Box>
          <Text>Location</Text>
          <Select variant={"unstyled"}>
            <option value="option1">Lusaka</option>
            <option value="option2">Mansa</option>
            <option value="option3">Chipata</option>
          </Select>
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

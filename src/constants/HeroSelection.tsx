import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import IconPin from "../assets/icons/PinIcon";

const HeroSelection = () => {
  return (
    <Box
      className={`md:grid-cols-4 grid grid-cols-1 p-4 mt-8 w-full ${useColorModeValue(
        "border-[#1B98E0]",
        "border-[#A2FAA3]"
      )} border-4`}
    >
      <Flex>
        <Box className="bg-gray-500">
          <IconPin />
        </Box>
        <Box>
          <Text>Location</Text>
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

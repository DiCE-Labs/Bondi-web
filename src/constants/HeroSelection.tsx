import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import IconPin from "../assets/icons/PinIcon";
import IconDollar from "../assets/icons/Dollar";
import IconBxHomeHeart from "../assets/icons/HomeHeart";

const HeroSelection = () => {
  return (
    <Box
      className={`md:grid-cols-4 gap-8 grid grid-cols-1 rounded-md p-4 mt-8 w-full ${useColorModeValue(
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
          <Text>Price</Text>
          <Select variant={"unstyled"}>
            <option value="option1">K1500-K2500</option>
            <option value="option2">K2500-K5000</option>
            <option value="option3">K5000-K8000</option>
            <option value="option3">K8000+</option>
          </Select>
        </Box>
      </Flex>
      <Flex>
        <IconBxHomeHeart />
        <Box>
          <Text>Type of Property</Text>
          <Select variant={"unstyled"}>
            <option value="option1">Boarding House</option>
            <option value="option2">Plot</option>
            <option value="option3">Appartment</option>
            <option value="option3">Office</option>
            <option value="option3">Farm</option>
          </Select>
        </Box>
      </Flex>
      <Button bg={useColorModeValue("#A2FAA3", "#1B98E0")}>Browse</Button>
    </Box>
  );
};

export default HeroSelection;

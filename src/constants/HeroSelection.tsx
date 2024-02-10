import { Box, useColorModeValue } from "@chakra-ui/react";

const HeroSelection = () => {
  return (
    <Box
      className={`md:grid-cols-4 grid grid-cols-1 ${useColorModeValue(
        "border-[#1B98E0]",
        "border-[#A2FAA3]"
      )} border-4`}
    >
      1234
    </Box>
  );
};

export default HeroSelection;

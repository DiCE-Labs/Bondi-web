import { Box, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box className=" mt-8">
      <Text className=" font-bold text-xl">Our Services</Text>
      <Box className=" grid md:grid-cols-3 grid-cols-2 gap-8 md:gap-4 mt-6">
        <Box>
          <Text>The price we offer accordance with the quality we provide</Text>
        </Box>
        <Box>
          <Text>Official legality in the relevant government</Text>
        </Box>
        <Box>
          <Text>We always work with agents in their fields</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;

import { Box, Text } from "@chakra-ui/react";

const BottomHero = () => {
  return (
    <Box className="grid lg:grid-cols-2 grid-cols-1 w-full py-12 lg:order-first order-last">
      <Box>
        <Text as={"h1"}>Comfort Is Our Top Priority For You</Text>
        <Text>
          We guarantee that the products we sell will make our customers happy
          because we are very concerned about our consumer satisfaction
        </Text>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default BottomHero;

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FeaturedListings = () => {
  return (
    <Box as="section" className=" min-h-screen w-full">
      <Flex className=" w-full justify-between">
        <Text className=" text-4xl font-bold">Featured Listings</Text>
        <Link to={"#"} className=" flex items-center gap-2">
          {" "}
          <span>Browse All Featured</span>
          <span>
            <ArrowForwardIcon />
          </span>{" "}
        </Link>
      </Flex>
    </Box>
  );
};

export default FeaturedListings;

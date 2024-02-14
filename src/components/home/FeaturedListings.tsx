import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FeaturedListings = () => {
  return (
    <Box as="section" className=" min-h-screen w-full py-12">
      <Flex className=" w-full gap-8 justify-between items-center">
        <Text className=" text-2xl md:text-4xl font-bold">
          Featured Listings
        </Text>
        <Link to={"#"} className="md:text-base text-sm" >
          {" "}
          <p>
            Browse All Featured{" "}
            <span>
              <ArrowForwardIcon />
            </span>{" "}
          </p>
        </Link>
      </Flex>
    </Box>
  );
};

export default FeaturedListings;

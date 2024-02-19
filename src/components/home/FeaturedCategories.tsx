import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FeaturedCategories = () => {
  return (
    <Box as={"section"} className="py-21 w-full">
      <Flex className=" w-full gap-8 justify-between items-center my-8">
        <Text className=" text-2xl md:text-4xl font-bold">
          Featured Categories
        </Text>
        <Link to={"#"} className="md:text-base text-sm font-bold">
          {" "}
          <p>
            Browse All Categories{" "}
            <span>
              <ArrowForwardIcon />
            </span>{" "}
          </p>
        </Link>
      </Flex>
    </Box>
  );
};

export default FeaturedCategories;

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { categories } from "../../constants/constants";

const FeaturedCategories = () => {
  return (
    <Box as={"section"} className="py-12 w-full">
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
      <Box className=" w-full grid lg:grid-cols-3 grid-cols-1 gap-8">
        {categories.map((item, i) => (
          <Flex key={i} className=" items-center border-lime-400 border w-full border-opacity-40 p-4">
            <Box>{item.icon}</Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedCategories;

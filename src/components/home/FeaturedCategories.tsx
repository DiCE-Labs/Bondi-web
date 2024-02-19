import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { categories } from "../../constants/constants";
import IconArrowUpRight from "../../assets/icons/ArrowUpRight";

const FeaturedCategories = () => {
  const buttonColor = useColorModeValue(
    "hover:text-gray-700",
    "hover:text-[#A2FAA3]"
  );
  return (
    <Box as={"section"} className="py-16 w-full">
      <Flex className=" w-full gap-8 justify-between items-center my-8">
        <Text className=" text-2xl md:text-4xl font-bold">
          Featured Categories
        </Text>
        <Link to={"#"} className="md:text-base text-sm font-bold">
          {" "}
          <p>
            Browse Categories{" "}
            <span>
              <ArrowForwardIcon />
            </span>{" "}
          </p>
        </Link>
      </Flex>
      <Box className=" w-full grid lg:grid-cols-3 grid-cols-1 gap-8 my-12">
        {categories.map((item, i) => (
          <Flex
            key={i}
            className=" items-center justify-between shadow rounded-xl border-[#A2FAA3] border w-full border-opacity-40 p-4"
          >
            <Flex className=" items-center gap-4">
              <Box className={`bg-[#A2FAA3] p-2 rounded-lg bg-opacity-30`}>
                {item.icon}
              </Box>
              <Text className=" text-lg font-bold">{item.name}</Text>
            </Flex>
            <Button
              variant={"ghost"}
              className={buttonColor}
              rightIcon={<IconArrowUpRight />}
            >
              View
            </Button>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedCategories;

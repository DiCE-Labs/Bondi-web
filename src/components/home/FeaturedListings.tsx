import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { dummyListing } from "../../constants/constants";

const FeaturedListings = () => {
  return (
    <Box as="section" className=" min-h-screen w-full py-12">
      <Flex className=" w-full gap-8 justify-between items-center">
        <Text className=" text-2xl md:text-4xl font-bold">
          Featured Listings
        </Text>
        <Link to={"#"} className="md:text-base text-sm">
          {" "}
          <p>
            Browse All Featured{" "}
            <span>
              <ArrowForwardIcon />
            </span>{" "}
          </p>
        </Link>
      </Flex>
      <Box className="grid md:grid-cols-3 grid-cols-1 w-full">
        {dummyListing.map((item, i) => (
          <Box key={i} className="rounded-3xl shadow-lg overflow-hidden">
            <Box className="h-56">
              <Image
                alt="listingImg"
                loading="lazy"
                className="w-full h-full object-cover"
                src={item.image}
              />
            </Box>
            <Flex className=" flex-col gap-2">
              <Text>{item.price}/month</Text>
              <Text>{item.name}</Text>
              <Text>{item.address}</Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedListings;

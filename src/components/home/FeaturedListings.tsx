import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { dummyListing } from "../../constants/constants";
import IconBedQueenOutline from "../../assets/icons/BedIcon";
import IconBxBath from "../../assets/icons/BathIcon";
import IconBxArea from "../../assets/icons/AreaIcon";

const FeaturedListings = () => {
  return (
    <Box
      as="section"
      className=" min-h-screen w-full py-12 flex flex-col items-center justify-center"
    >
      <Flex className=" w-full gap-8 justify-between items-center my-8">
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
      <Box className="grid md:grid-cols-3 grid-cols-1 w-full gap-8">
        {dummyListing.map((item, i) => (
          <Box
            key={i}
            className={`rounded-xl shadow-lg hover:shadow-2xl duration-500 delay-200 overflow-hidden border-lime-400 border border-opacity-40`}
          >
            <Box className=" h-48">
              <Image
                alt="listingImg"
                loading="lazy"
                className="w-full h-full object-cover"
                src={item.image}
              />
            </Box>
            <Flex className=" flex-col gap-2 p-4">
              <Text className=" text-xl md:text-2xl font-bold">
                {item.price}{" "}
                <span className=" md:text-base text-sm text-gray-400">
                  /month
                </span>
              </Text>
              <Text className=" mb-4 font-semibold text-lg">{item.name}</Text>
              <Text className=" text-gray-500">{item.address}</Text>
              <Flex className=" mt-6 justify-between">
                <Flex className=" items-center">
                  <IconBedQueenOutline />
                  {item.bedrooms} beds
                </Flex>
                <Flex className=" items-center">
                  <IconBxBath />
                  {item.bathrooms} baths
                </Flex>
                <Flex className=" items-center">
                  <IconBxArea />
                  {item.dimensions} m<sup>2</sup>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedListings;

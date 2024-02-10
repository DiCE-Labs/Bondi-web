import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import bg from "../assets/hero.webp";

const Home = () => {
  return (
    <Box as="header" className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
      <Box
        className={`flex items-center lg:order-first order-last justify-center w-full ${useColorModeValue(
          "bg-[#1B98E0]",
          "bg-[#A2FAA3]"
        )}`}
      >
        <Image
          src={bg}
          alt="heroImg"
          loading="lazy"
          className=" w-full h-full object-cover"
        />
      </Box>
      <Box className=" lg:col-span-2 col-span-1 justify-center items-start flex flex-col">
        <Text className="md:text-7xl text-5xl font-bold">
          We help people to realize their dream property
        </Text>
        <Text className={` max-w-md mt-4`}>
          We are creative people who provide the best way to you who want to
          have a new confortable and suitable place to live
        </Text>
      </Box>
    </Box>
  );
};

export default Home;

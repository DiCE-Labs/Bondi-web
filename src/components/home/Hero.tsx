import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import bg from "../../assets/hero.webp";
import HeroSelection from "../../constants/HeroSelection";
import Services from "../../components/home/Services";

const Hero = () => {
  return (
    <Box
      as="header"
      className="grid grid-cols-1 lg:grid-cols-3 min-h-screen gap-8 py-12 md:py-0 md:bg-gradient-to-bl via-transparent from-transparent to-lime-400/10"
    >
      <Box
        className={`flex items-center overflow-hidden lg:order-first order-last justify-center w-full ${useColorModeValue(
          "bg-[#1B98E0]",
          "bg-[#A2FAA3]"
        )}`}
      >
        <Image
          src={bg}
          alt="heroImg"
          loading="lazy"
          className=" w-full md:h-full h-96 object-cover grayscale hover:grayscale-0 duration-300 delay-100 hover:rotate-3 hover:scale-105 ease-in-out"
        />
      </Box>
      <Box className=" lg:col-span-2 col-span-1 justify-center items-start flex flex-col">
        <Text className="md:text-7xl text-5xl font-bold">
          We help people to realize their dream property
        </Text>
        <Text as={"p"} className={` max-w-md mt-4 text-gray-500`}>
          We are creative people who provide the best way to you who want to
          have a new confortable and suitable place to live
        </Text>
        <HeroSelection />
        <Services />
      </Box>
    </Box>
  );
};

export default Hero;

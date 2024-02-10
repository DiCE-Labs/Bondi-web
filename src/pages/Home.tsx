import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import bg from "../assets/hero.webp";

const Home = () => {
  return (
    <Box as="header" className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
      <Box
        className={`flex items-center justify-center w-full ${useColorModeValue(
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
      <Box className=" lg:col-span-2 col-span-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ullam sapiente obcaecati asperiores sit non ea tenetur dolorum iusto ipsa hic, laborum nemo nisi placeat delectus cum et modi vel!
      </Box>
    </Box>
  );
};

export default Home;

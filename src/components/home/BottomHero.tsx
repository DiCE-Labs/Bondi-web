import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import bg from "../../assets/images/hero.png";
import IconBxsQuoteRight from "../../assets/icons/QuoteRight";

const BottomHero = () => {
  return (
    <Box className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-8 w-full py-12">
      <Box
        className={`flex items-center overflow-hidden lg:order-last order-first rounded-xl justify-center w-full ${useColorModeValue(
          "bg-[#1B98E0]",
          "bg-[#A2FAA3]"
        )}`}
      >
        <Image
          src={bg}
          alt="heroImg"
          loading="lazy"
          className=" w-full h-full object-cover grayscale hover:grayscale-0 duration-300 delay-100 hover:rotate-1 hover:scale-105 ease-in-out"
        />
      </Box>
      <Box className="md:max-w-md w-full">
        <Text as={"h1"} className="text-2xl md:text-4xl font-bold">
          Comfort Is Our Top Priority For You
        </Text>
        <Text
          className={`${useColorModeValue(
            "text-gray-600",
            "text-gray-300"
          )} py-4 mb-6`}
        >
          We guarantee that the products we sell will make our customers happy
          because we are very concerned about our consumer satisfaction
        </Text>
        <Divider />
        <Text
          className={`${useColorModeValue(
            "text-gray-600",
            "text-gray-300"
          )} py-4 mb-6 text-sm`}
        >
          "Your company is truly upstanding and is behind its product 100%. It's
          the perfect solution for our business. It has really helped our
          business."
        </Text>

        <Flex className="items-center justify-between">
          <Flex className=" items-center gap-4">
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Box>
              <Text className="font-bold">Cholah Kuboko</Text>
              <Text
                className={`${useColorModeValue(
                  "text-gray-500",
                  "text-gray-300"
                )}`}
              >
                CEO of Bondi
              </Text>
            </Box>
          </Flex>
          <IconBxsQuoteRight />
        </Flex>
      </Box>
    </Box>
  );
};

export default BottomHero;

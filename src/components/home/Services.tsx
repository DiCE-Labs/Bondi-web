import { Box, Flex, Text } from "@chakra-ui/react";
import IconMoneyStack from "../../assets/icons/MoneyStack";
import IconHandshake from "../../assets/icons/HandShake";
import IconPeopleGroup from "../../assets/icons/PeopleGroup";

const Services = () => {
  return (
    <Box className=" mt-8">
      <Text className=" font-bold text-xl">Our Services</Text>
      <Box className=" grid md:grid-cols-3 grid-cols-2 gap-8 md:gap-4 mt-6">
        <Flex className=" flex-col gap-4">
          <IconMoneyStack />
          <Text>The price we offer accordance with the quality we provide</Text>
        </Flex>
        <Flex className=" flex-col gap-4">
          <IconHandshake />
          <Text>Official legality in the relevant government</Text>
        </Flex>
        <Flex className=" flex-col gap-4">
          <IconPeopleGroup />
          <Text>We always work with agents in their fields</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Services;

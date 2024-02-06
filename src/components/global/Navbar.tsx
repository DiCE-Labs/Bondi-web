import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex
      className={`w-full justify-between py-4 shadow-md fixed top-0 px-4 md:px-12`}
      backgroundColor={colorMode === "dark" ? "#02182B" : "white"}
    >
      <Button>Nav</Button>
      <IconButton
        aria-label="theme"
        onClick={() => toggleColorMode()}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        isRound
      />
    </Flex>
  );
};

export default Navbar;

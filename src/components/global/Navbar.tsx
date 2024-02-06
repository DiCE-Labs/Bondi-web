import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex>
      <Button>Nav</Button>
      <IconButton
        aria-label="theme"
        onClick={() => toggleColorMode()}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </Flex>
  );
};

export default Navbar;

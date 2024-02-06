import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Input, useColorMode, useDisclosure } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation();
  return (
    <>
      <Flex
        className={`w-full justify-between py-4 shadow-md fixed top-0 px-4 md:px-12 items-center`}
        backgroundColor={colorMode === "dark" ? "#02182B" : "white"}
      >
        <Link to={"/"} className="font-bold">
          Bondi
        </Link>

        <Flex className=" gap-8 items-center">
          {navLinks.map((l, i) => (
            <NavLink
              key={i}
              to={l.link}
              className={`${
                location.pathname === l.link
                  ? colorMode === "dark"
                    ? "text-[#A2FAA3]"
                    : "text-[#1B98E0]"
                  : ""
              }`}
            >
              {l.name}
            </NavLink>
          ))}
          <IconButton
            aria-label="theme"
            onClick={() => toggleColorMode()}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            isRound
          />
        </Flex>
        <Button
         colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Favorites",
    link: "/favorites",
  },
];

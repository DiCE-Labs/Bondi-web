import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

        <Flex
          className="gap-8 items-center"
          display={{ lg: "block", base: "none" }}
        >
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
        <Flex className=" gap-4">
          <IconButton
            aria-label="theme"
            onClick={() => toggleColorMode()}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            isRound
          />
          <IconButton
            aria-label="menu"
            onClick={onOpen}
            icon={<HamburgerIcon />}
            className="lg:hidden block"
            display={{ lg: "none", base: "block" }}
          />
        </Flex>
      </Flex>
      <Drawer
        colorScheme={colorMode === "dark" ? "#02182B" : "white"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody className=" flex flex-col gap-4">
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
                } py-2 hover:opacity-80`}
                onClick={onClose}
              >
                {l.name}
              </NavLink>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button
              className=" w-full"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Log out
            </Button>
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

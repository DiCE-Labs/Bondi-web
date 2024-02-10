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
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import IconBxCartAlt from "../../assets/icons/CartIcon";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const navLinkColor = useColorModeValue("text-[#1B98E0]", "text-[#A2FAA3]");
  return (
    <>
      <Flex
        className={`w-full justify-between py-4 shadow-md fixed top-0 px-4 md:px-12 items-center`}
        backgroundColor={useColorModeValue("white", "#02182B")}
      >
        <Link
          to={"/"}
          className=" font-extrabold md:text-3xl text-2xl flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13zm9-8.586l6 6V15l.001 5H6v-9.586l6-6z" />
            <path d="M12 18c3.703 0 4.901-3.539 4.95-3.689l-1.9-.621c-.008.023-.781 2.31-3.05 2.31-2.238 0-3.02-2.221-3.051-2.316l-1.899.627C7.099 14.461 8.297 18 12 18z" />
          </svg>
          Bondi
        </Link>

        <Flex
          className="gap-4 items-center"
          display={{ lg: "flex", base: "none" }}
        >
          {navLinks.map((l, i) => (
            <NavLink
              key={i}
              to={l.link}
              className={`${
                location.pathname === l.link ? `${navLinkColor}` : ""
              } p-2`}
            >
              {l.name}
            </NavLink>
          ))}
          <NavLink
            className={`${
              location.pathname === "/login" ? `${navLinkColor}` : ""
            } p-2`}
            to={"/login"}
          >
            Log in
          </NavLink>
          <NavLink
            className={`${
              location.pathname === "/register" ? `${navLinkColor}` : ""
            } p-2 bg-[#A2FAA3] rounded-md text-black`}
            to={"/register"}
          >
            Register
          </NavLink>
        </Flex>
        <Flex className="gap-4" display={{ lg: "none", base: "flex" }}>
          <IconButton
            aria-label="theme"
            onClick={() => toggleColorMode()}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            display={{ lg: "none", base: "block" }}
          />
          <IconButton
            aria-label="menu"
            onClick={onOpen}
            icon={<HamburgerIcon />}
            className="lg:hidden block"
            display={{ lg: "none", base: "block" }}
          />
        </Flex>
        <Flex className=" gap-4" display={{ lg: "flex", base: "none" }}>
          <IconButton aria-label="cart" icon={<IconBxCartAlt />} />
          <IconButton
            aria-label="theme"
            onClick={() => toggleColorMode()}
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
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
    name: "Properties",
    link: "/properties",
  },
  {
    name: "Favorites",
    link: "/favorites",
  },
];

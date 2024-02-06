import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  let location = useLocation();
  return (
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
    </Flex>
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

import { Box, useColorMode } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="section"
      className="w-full mx-auto max-w-7xl bg-[#02182B] justify-center px-4 md:px-12 relative items-center flex flex-col"
      backgroundColor={colorMode === "dark" ? "#02182B" : "white"}
    >
      <Navbar />
      <Box as="main" className="min-h-screen w-full mt-20">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

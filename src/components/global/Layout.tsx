import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      as="section"
      className="w-full mx-auto maw-w-7xl justify-center relative items-center flex flex-col"
    >
      <Navbar />
      <Box as="main" className="min-h-screen w-full">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

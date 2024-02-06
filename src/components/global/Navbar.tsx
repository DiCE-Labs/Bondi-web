import { Button, Flex,useColorMode} from "@chakra-ui/react";

const Navbar = () => {
  const {toggleColorMode}=useColorMode()
  return (
    <Flex>
      <Button backgroundColor={"custom.dark"} _hover={{backgroundColor:"custom.semi"}} onClick={()=>toggleColorMode()}>Nav</Button>
    </Flex>
  );
};

export default Navbar;

import {
    Container,
    Flex,
    HStack,
    Heading,
    IconButton,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { FiPlusSquare } from "react-icons/fi";
  import { FaSun } from "react-icons/fa";
  import { IoMoonOutline } from "react-icons/io5";
  
  import { useColorMode } from "@/components/ui/color-mode";  
  export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Container maxW="7xl" py={4}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: "column", sm: "row" }}
          gap={4}
        >
          <Heading
            size="2xl"
            textTransform="uppercase"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.600"
            bgClip="text"
          >
            <Link to="/">StockFlow</Link>
          </Heading>
  
          <HStack>
            <Link to="/create">
              <IconButton
                aria-label="Create Product"
                colorPalette="blue"
                variant="solid"
              >
                <FiPlusSquare />
              </IconButton>
            </Link>
  
            <IconButton
              aria-label="Toggle Theme"
              onClick={toggleColorMode}
              variant="outline"
            >
              {colorMode === "light" ? <FaSun /> : <IoMoonOutline />}
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    );
  }
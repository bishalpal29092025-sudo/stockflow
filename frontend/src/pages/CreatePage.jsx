import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useColorMode } from "@/components/ui/color-mode";
import { toaster } from "@/components/ui/toaster";
import { useProductStore } from "@/store/product";

export default function CreatePage() {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const { createProduct } = useProductStore();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
      closable: true,
    });

    if (!success) return;

    setNewProduct({
      name: "",
      price: "",
      image: "",
    });

    // Give the user time to see the toast
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <Container maxW="4xl" py={{ base: 10, md: 16 }}>
      <VStack gap={8}>
        {/* Page Heading */}
        <VStack gap={2}>
          <Heading
            size="3xl"
            textAlign="center"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.600"
            bgClip="text"
          >
            Create Product
          </Heading>

          <Text
            color="gray.500"
            textAlign="center"
            fontSize="lg"
          >
            Add a new product to your inventory.
          </Text>
        </VStack>

        {/* Form Card */}
        <Box
          w="full"
          maxW="720px"
          mx="auto"
          p={{ base: 6, md: 10 }}
          borderRadius="2xl"
          shadow="2xl"
          borderWidth="1px"
          borderColor={
            colorMode === "light" ? "gray.200" : "gray.700"
          }
          bg={colorMode === "light" ? "white" : "gray.900"}
        >
          <VStack gap={5} align="stretch">
            <Input
              size="lg"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  name: e.target.value,
                })
              }
            />

            <Input
              size="lg"
              type="number"
              placeholder="Product Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value,
                })
              }
            />

            <Input
              size="lg"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  image: e.target.value,
                })
              }
            />

            <Button
              size="lg"
              colorPalette="blue"
              w="full"
              onClick={handleAddProduct}
            >
              Add Product
            </Button>

            <Link to="/" style={{ width: "100%" }}>
              <Button
                size="lg"
                variant="outline"
                w="full"
              >
                Back to Home
              </Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
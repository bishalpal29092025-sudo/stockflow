import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { toaster } from "@/components/ui/toaster";
import { useColorMode } from "@/components/ui/color-mode";
import { useProductStore } from "@/store/product";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { colorMode } = useColorMode();

  const { fetchProductById, updateProduct } = useProductStore();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const loadProduct = async () => {
      const { success, product, message } = await fetchProductById(id);

      if (!success) {
        toaster.create({
          title: "Error",
          description: message,
          type: "error",
        });

        return;
      }

      setProduct(product);
    };

    loadProduct();
  }, [id, fetchProductById]);

  const handleUpdate = async () => {
    const { success, message } = await updateProduct(id, product);

    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      type: success ? "success" : "error",
    });

    if (success) {
      navigate("/");
    }
  };

  return (
    <Container maxW="3xl" py={16}>
      <VStack gap={8}>
        <VStack gap={2}>
          <Heading
            size="3xl"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.600"
            bgClip="text"
          >
            Edit Product
          </Heading>

          <Text color="gray.500">
            Update your product information
          </Text>
        </VStack>

        <Box
          w="full"
          maxW="720px"
          mx="auto"
          p={10}
          rounded="2xl"
          shadow="2xl"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          bg={colorMode === "light" ? "white" : "gray.900"}
        >
          <VStack gap={5}>
            <Input
              size="lg"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) =>
                setProduct({
                  ...product,
                  name: e.target.value,
                })
              }
            />

            <Input
              size="lg"
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: e.target.value,
                })
              }
            />

            <Input
              size="lg"
              placeholder="Image URL"
              value={product.image}
              onChange={(e) =>
                setProduct({
                  ...product,
                  image: e.target.value,
                })
              }
            />

            <Button
              w="full"
              size="lg"
              colorPalette="blue"
              onClick={handleUpdate}
            >
              Update Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
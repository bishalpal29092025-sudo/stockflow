import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useProductStore } from "@/store/product";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="7xl" py={12}>
      <VStack gap={10}>
        {/* Heading */}
        <VStack gap={3}>
          <Heading
            size="3xl"
            textAlign="center"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.600"
            bgClip="text"
          >
            Current Products 🚀
          </Heading>

          <Text
            color="gray.500"
            fontSize="lg"
            textAlign="center"
          >
            Manage your inventory effortlessly.
          </Text>
        </VStack>

        {/* Products */}
        {products.length > 0 ? (
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            gap={8}
            w="full"
          >
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </SimpleGrid>
        ) : (
          <VStack
            py={20}
            gap={5}
            borderWidth="1px"
            borderRadius="2xl"
            borderStyle="dashed"
            borderColor="gray.300"
            w="full"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="gray.500"
            >
              No Products Found 📦
            </Text>

            <Text
              color="gray.400"
              textAlign="center"
            >
              Start building your inventory by adding your first product.
            </Text>

            <Link to="/create">
              <Button
                colorPalette="blue"
                size="lg"
              >
                Create Product
              </Button>
            </Link>
          </VStack>
        )}
      </VStack>
    </Container>
  );
}
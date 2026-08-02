import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Container maxW="container.md" py={32}>
      <VStack gap={8}>
        <Heading
          fontSize="8xl"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.600"
          bgClip="text"
        >
          404
        </Heading>

        <Heading size="2xl">
          Page Not Found
        </Heading>

        <Text color="gray.500" textAlign="center">
          Sorry, the page you're looking for doesn't exist.
        </Text>

        <Link to="/">
          <Button colorPalette="blue" size="lg">
            Back to Home
          </Button>
        </Link>
      </VStack>
    </Container>
  );
}
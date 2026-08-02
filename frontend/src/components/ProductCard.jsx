import {
    Box,
    Button,
    HStack,
    Icon,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
  
  import { FaEdit } from "react-icons/fa";
  import { MdDelete } from "react-icons/md";
  import { Link } from "react-router-dom";
  
  import { useProductStore } from "@/store/product";
  import { toaster } from "@/components/ui/toaster";
  
  export default function ProductCard({ product }) {
    const { deleteProduct } = useProductStore();
  
    const handleDelete = async () => {
      const { success, message } = await deleteProduct(product._id);
  
      toaster.create({
        title: success ? "Success" : "Error",
        description: message,
        type: success ? "success" : "error",
      });
    };
  
    return (
      <Box
        borderRadius="2xl"
        overflow="hidden"
        borderWidth="1px"
        shadow="lg"
        transition="all 0.3s"
        _hover={{
          transform: "translateY(-8px)",
          shadow: "2xl",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          h="240px"
          w="full"
          objectFit="cover"
        />
  
        <VStack
          align="start"
          p={5}
          gap={3}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
          >
            {product.name}
          </Text>
  
          <Text
            fontSize="xl"
            color="blue.500"
            fontWeight="semibold"
          >
            $ {Number(product.price).toLocaleString()}
          </Text>
  
          <HStack
            w="full"
            justify="space-between"
          >
            <Link to={`/edit/${product._id}`}>
              <Button
                colorPalette="blue"
                size="sm"
              >
                <Icon as={FaEdit} />
              </Button>
            </Link>
  
            <Button
              colorPalette="red"
              size="sm"
              onClick={handleDelete}
            >
              <Icon as={MdDelete} />
            </Button>
          </HStack>
        </VStack>
      </Box>
    );
  }
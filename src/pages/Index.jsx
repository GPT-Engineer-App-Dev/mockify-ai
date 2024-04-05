// Complete the Index page component here
// Use chakra-ui
import { Heading, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={8} align="center" justify="center" minHeight="100vh">
      <Heading as="h1" size="2xl">
        Welcome to Chakra UI ❤️
      </Heading>
    </VStack>
  );
};

export default Index;

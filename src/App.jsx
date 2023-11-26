import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Button,
  Center,
  Flex,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CheckIcon } from '@chakra-ui/icons';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={2} minH='100vh'>
        <Container maxW='container.lg' >
          <Flex justify="flex-end">
            <ColorModeSwitcher />
          </Flex>
          <Center>
            <Button size='md' colorScheme='yellow' rightIcon={<CheckIcon />} >Confirm</Button>
          </Center>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

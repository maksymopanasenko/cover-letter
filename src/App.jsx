import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Button,
  Center,
  Flex,
  Container,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { CheckIcon } from '@chakra-ui/icons';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" pt={4} pb={10} minH='100vh'>
        <Container maxW='container.lg' >
          <Flex justify="flex-end" alignItems='center' gap={4}>
            <ColorModeSwitcher />
            <LanguageSwitcher />
          </Flex>
          <Stack spacing={8} mt={5}>
            <Heading fontSize='3xl' fontWeight="semibold">Cover letter</Heading>
            <Text fontSize='xl' textAlign='justify' >
              Dear Recruiter, <br /><br />
              If you are reading this letter, please know that I am extremely interested in the position you have posted and I'm confident that I will be able to add value to future projects and benefit both the team and the company as a whole.
              For several years, I have been gathering knowledge and experience in developing modern web applications to eventually make a significant contribution to the development of a company that will believe in me and my strengths.<br /><br />
              Starting with the simplest HTML, CSS and JS, I enriched my skills with new technologies step by step and I'm not going to stop there. Now I can confidently call myself a React-oriented front-end developer who has devoted an extremely large amount of time and energy to developing myself as a programmer. But my ambitions don't stop there - there are still many languages and technologies I intend to master. I already had a little practical experience with the backend part - Node.js, as well as the MongoDB database, and I plan to further deepen my knowledge and improve my skills to provide the best possible user interface and optimize the performance of applications. <br /><br />
              In addition to my technical skills, I am also a highly motivated and results-oriented individual with a strong work ethic and a collaborative spirit. I am a quick learner, adaptable to new technologies, and I am always eager to take on new challenges. I am confident that my skills and experience would be a valuable asset to your team. I am fully prepared for both team project development and individual tasks, and the SCRUM methodology is not alien to me. My motto is "There are no impossible tasks, the 'unrealistic' ones take a little more time." <br /><br />

              I am eager to discuss how my skills and experience can contribute to the success of company I will work for. Thank you for considering my application. Have a nice day!
            </Text>
            <Text textAlign="start" mt={3} >
              Sincerely, <br />
              Maksym Opanasenko
            </Text>
          </Stack>
          <Stack mt={16}>
            <Text fontSize='xs' textAlign='justify'>
              I collect statistics on how often cover letters are read by recruiters. Writing a custom letter can take up a lot of time that a junior could spend studying or doing other useful things. From personal experience, I may never have received a response to my letters. I'm curious if recruiters even read cover letters, so if you're here, please click the "Confirm" button so I can collect the necessary data for my research. By doing so, you consent to the processing of data related to your location by IP address.
            </Text>
            <Center mt={5}>
              <Button size='md' colorScheme='yellow' rightIcon={<CheckIcon />} >Confirm</Button>
            </Center>
          </Stack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

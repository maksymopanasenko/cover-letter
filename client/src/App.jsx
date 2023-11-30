import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Container,
  Stack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import Research from './components/Research/Research';
import CookieBanner from './components/CookieBanner/CookieBanner';


function App() {
  const { t } = useTranslation();

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" pt={4} pb={10} minH='100vh'>
        <Container maxW='container.lg' >
          <Flex justify="flex-end" alignItems='center' gap={4}>
            <ColorModeSwitcher />
            <LanguageSwitcher />
          </Flex>
          <Stack spacing={8} mt={8}>
            <Heading fontSize='3xl' fontWeight="semibold" mb={4}>{t("title")}</Heading>
            <Text fontSize='xl' textAlign='justify' >
              {t("greeting")}<br /><br />
              {t("segment1")}<br /><br />
              {t("segment2")}<br /><br />
              {t("segment3")}<br /><br />
              {t("segment4")}<br /><br />
            </Text>
            <Text textAlign="start" mt={3} >
              {t("final")}<br />
              {t("name")}
            </Text>
          </Stack>
          <Research />
          <CookieBanner />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

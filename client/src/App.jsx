import React from 'react';
import {
  Box,
  Flex,
  Container,
  Stack,
  Text,
  Heading,
  useColorMode,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
// import Research from './components/Research/Research';
import CookieBanner from './components/CookieBanner/CookieBanner';


function App() {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();

  return (
    <Box textAlign="center" fontSize="xl" pt={4} pb={10} minH='100vh'>
      <Box pos="fixed" top={0} right={0} left={0} zIndex={100} w="100%" bgColor={colorMode === 'light' ? 'white' : 'gray.800'}>
        <Container p={4} maxW='container.lg'>
          <Flex justify="flex-end" alignItems='center' gap={4}>
            <ColorModeSwitcher />
            <LanguageSwitcher />
          </Flex>
        </Container>
      </Box>
      <Container maxW='container.lg' mt={20}>
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
        {/* <Research /> */}
        <CookieBanner />
      </Container>
    </Box>
  );
}

export default App;

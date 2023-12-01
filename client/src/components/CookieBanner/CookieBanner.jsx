import React, { useState } from 'react';
import { Box, Button, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import sendDataToServer from '../../helpers/sendData';
import { useTranslation } from 'react-i18next';


const API_URL_IP = 'https://api.ipify.org/?format=json';
const API_URL_DATA = 'https://ipapi.co/';

const CookieBanner = () => {
    const { colorMode } = useColorMode();
    const [showBanner, setShowBanner] = useState(true);
    const { t } = useTranslation();
    const variant = useBreakpointValue(
        {
            base: 12,
            md: 16,
            lg: 18,
        },
        {
            fallback: 'md',
        },
    )

    const handleAccept = async () => {
        setShowBanner(false);
        try {
            const ipResponse = await fetch(API_URL_IP);
            const { ip } = await ipResponse.json();

            if (localStorage.getItem("ip") === ip) return;

            const dataResponse = await fetch(`${API_URL_DATA}${ip}/json`);
            const {city, country_name } = await dataResponse.json();

            const bodyData = {
                city: city,
                country: country_name
            };

            await sendDataToServer(bodyData);
            localStorage.setItem("ip", ip);
        } catch (error) {
            throw error;
        }
    }

    return (
        showBanner && (
            <Box
                position="fixed"
                top={0}
                bottom={0}
                left={0}
                right={0}
                bg="#1f1f1fba"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    backdropFilter="blur(6px)"
                    borderRadius="md"
                />
                <Box
                    bg={colorMode === 'light' ? 'white' : 'gray.800'}
                    color={colorMode === 'light' ? 'black' : 'white'}
                    p={4}
                    position="fixed"
                    bottom={0}
                    left={0}
                    width="100%"
                    textAlign="center"
                >
                    <Text fontSize={variant} mb={5}>
                        {t("research")}
                    </Text>
                    <Button colorScheme="yellow" ml={4} onClick={handleAccept}>
                        {t("btn")}
                    </Button>
                </Box>
            </Box>
        )
    );
};

export default CookieBanner;
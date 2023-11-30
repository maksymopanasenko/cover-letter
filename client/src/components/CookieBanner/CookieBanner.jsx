import React, { useEffect, useState } from 'react';
import { Box, Button, Link, Text } from '@chakra-ui/react';
import sendDataToServer from '../../helpers/sendData';


const API_URL_IP = 'https://api.ipify.org/?format=json';
const API_URL_DATA = 'https://ipapi.co/';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(true);

    const handleAccept = () => setShowBanner(false);   
    
    useEffect(() => {
        (async () => {
          try {
            const ipResponse = await fetch(API_URL_IP);
            const { ip } = await ipResponse.json();
    
            const dataResponse = await fetch(`${API_URL_DATA}${ip}/json`);
            const { city, country_name } = await dataResponse.json();
            const bodyData = {
              city: city,
              country: country_name
            };
            await sendDataToServer(bodyData);
    
          } catch (error) {
            throw error;
          }
        })()
      }, [])

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
                    backdropFilter="blur(5px)"
                    borderRadius="md"
                />
                <Box
                    bg="#333"
                    color="white"
                    p={4}
                    position="fixed"
                    bottom={0}
                    left={0}
                    width="100%"
                    textAlign="center"
                >
                    <Text>
                        We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                        Learn more in our <Link href="/privacy-policy">Privacy Policy</Link>.
                    </Text>
                    <Button colorScheme="green" ml={4} onClick={handleAccept}>
                        Accept
                    </Button>
                </Box>
            </Box>
        )
    );
};

export default CookieBanner;
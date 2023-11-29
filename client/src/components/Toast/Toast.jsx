import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { CheckIcon } from '@chakra-ui/icons';
import sendDataToServer from '../../helpers/sendData';

const API_URL_IP = 'https://api.ipify.org/?format=json';
const API_URL_DATA = 'https://ipapi.co/';

const Toast = ({ onResolve }) => {
    const toast = useToast();
    const { t } = useTranslation();

    const getIpData = async () => {
        try {
            const ipResponse = await fetch(API_URL_IP);
            const { ip } = await ipResponse.json();
            
            const dataResponse = await fetch(`${API_URL_DATA}${ip}/json`);
            const {city, country_name} = await dataResponse.json();
            const bodyData = {
                city: city,
                country: country_name
            };
            await sendDataToServer(bodyData);

            onResolve();
        } catch (error) {
            throw error;
        }
    };

    return (
        <Button
            size='md' colorScheme='yellow' rightIcon={<CheckIcon />}
            onClick={() => {
                toast.promise(getIpData(), {
                    success: { title: 'Done!', description: 'Thank you!' },
                    error: { title: 'Failure... Try again', description: 'Something went wrong' },
                    loading: { title: 'Data is recording...', description: 'Please wait' },
                })
            }}
        >
            {t("btn")}
        </Button>
    )
}

export default Toast;
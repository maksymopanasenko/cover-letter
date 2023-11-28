import {
    Button,
    Center,
    Stack,
    Text,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { CheckIcon } from '@chakra-ui/icons';
import Toast from '../Toast/Toast';
import { useState } from 'react';

const Research = () => {
    const { t, i18n } = useTranslation();
    const [isResolved, setIsResolved] = useState(true);

    const handleResolving = () => {
        setIsResolved(prev => !prev);
    }

    return (
        <Stack mt={16}>
            {isResolved && (
                <>
                    <Text fontSize='xs' textAlign='justify'>
                        {t("research")}
                    </Text>
                    <Center mt={5}>
                        <Toast onResolve={handleResolving} />
                    </Center>
                </>
            )}
        </Stack>
    );
}

export default Research;
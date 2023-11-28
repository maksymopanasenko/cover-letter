import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { CheckIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Toast = ({ onResolve }) => {
    const toast = useToast();
    const { t, i18n } = useTranslation();

    return (
        <Button
            size='md' colorScheme='yellow' rightIcon={<CheckIcon />}
            onClick={() => {
                // Create an example promise that resolves in 5s
                const examplePromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        onResolve();
                        resolve(200);
                    }, 5000)
                })


                toast.promise(examplePromise, {
                    success: { title: 'Data is recorded', description: 'Looks great' },
                    error: { title: 'Promise rejected', description: 'Something wrong' },
                    loading: { title: 'Promise pending', description: 'Please wait' },
                })
            }}
        >
            {t("btn")}
        </Button>
    )
}

export default Toast;
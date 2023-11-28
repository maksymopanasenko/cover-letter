const sendDataToServer = async (data) => {
    try {
        const response = await fetch('https://cover-letter-api.vercel.app/api/statistics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to send data to the server');
        }
    } catch (error) {
        throw error;
    }
};
export default sendDataToServer;
export default async (req, res) => {
    if (req.method === 'POST') {
        const { fullName, email, phoneNumber, message } = req.body;
        const accessKey = process.env.MORNE_EMAIL_ACCESS_KEY;

        if (!accessKey) {
            console.error('Email Access Key not found in environment variables.');
            return res.status(500).json({ error: 'Server configuration error.' });
        }

        const formData = new URLSearchParams();
        formData.append('access_key', accessKey);
        formData.append('name', fullName);
        formData.append('email', email);
        formData.append('phone', phoneNumber || '');
        formData.append('message', `Origin: ${process.env.SITE_NAME} \n` (message));

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow',
            });

            console.log('Web3Forms API Response:', response);

            if (response.ok && response.redirected && response.url === 'https://web3forms.com/success') {
                return res.status(200).json({ message: 'Form submitted successfully!' });
            } else {
                try {
                    const errorData = await response.json();
                    console.error('Error Sending Email:', errorData);
                    return res.status(response.status).json(errorData);
                } catch (error) {
                    const errorText = await response.text();
                    console.error('Web3Forms non-JSON error:', errorText);
                    return res.status(response.status).json({ error: errorText || `Web3Forms error with status: ${response.status}` });
                }
            }
        } catch (error) {
            console.error('Error submitting to Web3Forms:', error);
            return res.status(500).json({ error: 'Failed to submit form.' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
};
import mailChimp from '@mailchimp/mailchimp_marketing';


export default async (req, res) => {
    const { email } = req.body;

    mailChimp.setConfig({
        apiKey: '027be748c32ba75130f006ec0a96110c-us14',
        server: 'us14',
    });

    // Adding email to mail list:
    try {
        const response = await mailChimp.lists.addListMember("1f102052d4",
            {
                email_address: email,
                status: 'subscribed'
            }
        );
        console.log("Response: ", response);
    } catch (e) {
        console.log("Error: ", e);
    }
    return;
}
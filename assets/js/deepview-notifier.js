import ('https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js');
const vm = new Vue({
    el: '#request-form',
    //Mock data for the value of BTC in USD
    data: { url_data: ''},
    methods: {
        async onbaordClients(req, res) {
            const options = {
                username: 'ClientBot', // This will appear as user name who posts the message
                text: `Hi <!here> <@daniellelawrence> Data requested for a demo Client's details is attached bellow`, // <> are used for linking
                icon_emoji: ':bell:', // User icon, you can also use custom icons here
                attachments: [ // attachments, here we also use long attachment to use more space
                    {
                        color: '#2eb886',
                        fields: [
                            {
                                title: 'Official Address',
                                value: `Data`,
                                short: true
                            },
                            {
                                title: 'Client Phone',
                                value: `Data`,
                                short: true
                            },
                            {
                                title: 'Client Mail',
                                value: `Data`,
                                short: true
                            },
                            {
                                title: 'Production',
                                value: 'Freyda WebAPP',
                                short: true
                            },
                            {
                                title: 'Additional notes from client',
                                value: `Data`,
                                short: false // marks this to be wide attachment
                            }
                        ],
                    }
                    ]
            };

            axios.post(`${this.url_data}`, JSON.stringify(options))
                .then((response) => {
                    console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log('FAILED: Send slack webhook', error);
                    reject(new Error('FAILED: Send slack webhook'));
                });
        },
    },
    mounted(){
        var decryptedBytes = CryptoJS.AES.decrypt('U2FsdGVkX19JdwpaM2JF1RcT4TCWDvndBCCa1TsVjGceiPmn//VQn6ybMoYxSyKwKsYSQV7j505YFzEgpMD9By5tQzhvmAlKSW0nYtCxDTEEbp09AzM7ixbgorRWCi7j\n', "196N4ZKknEgPkQ{4r%O>IQXcTg#IDKOpx3]4)v_[,*k:}RT#r%b5!N[5d(N13O5");
        this.url_data = decryptedBytes.toString(CryptoJS.enc.Utf8);
        // this.onbaordClients();
    },
});

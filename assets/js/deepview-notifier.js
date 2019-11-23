import ('https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js');
const vm = new Vue({
    el: '#request_form',
    //Mock data for the value of BTC in USD
    data: {
        request_form: {},
        url_data: '',
        checkedProduct:[]
    },
    methods: {
        async InitNotifier(e) {
            e.preventDefault();
            $("#request-button").attr("disabled", true);
            const options = {
                username: 'ClientBot', // This will appear as user name who posts the message
                text: `Hi <!here> ${this.request_form.fullname} requested for a demo details are attached bellow`, // <> are used for linking
                icon_emoji: ':bell:', // User icon, you can also use custom icons here
                attachments: [ // attachments, here we also use long attachment to use more space
                    {
                        color: '#2eb886',
                        fields: [
                            {
                                title: 'Company',
                                value: `${this.request_form.company}`,
                                short: true
                            },
                            {
                                title: 'Work E-mail',
                                value: `${this.request_form.work_mail}`,
                                short: true
                            },
                            {
                                title: 'Position',
                                value: `${this.request_form.position}`,
                                short: true
                            },
                            {
                                title: 'Product of Interest',
                                value: `${this.checkedProduct}`,
                                short: false // marks this to be wide attachment
                            }
                        ],
                    }
                    ]
            };

            // Init notification stage 1
            axios.post(`${this.url_data}`, JSON.stringify(options))
                .then((response) => {
                    this.request_form = {};
                    $('#requestDemo').click();
                    setTimeout(function(){ iziToast.success({
                        id: null,
                        title: 'Success',
                        message: 'Your request has been received. A Divemastar will contact you shortly',
                        messageColor: '#fff',
                        messageSize: '',
                        messageLineHeight: '',
                        backgroundColor: '',
                        theme: 'dark', // dark
                        color: '#00ced1', // blue, red, green, yellow
                        imageWidth: 50,
                        maxWidth: null,
                        zindex: 999,
                        layout: 1,
                        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                        animateInside: true,
                        drag: true,
                        pauseOnHover: true,
                        progressBar: true,
                        progressBarColor: 'rgb(0, 255, 184)',
                        overlayColor: 'rgba(0, 0, 0, 0.6)',
                        transitionOut: 'fadeOut',
                        timeout: 3000
                    }); }, 1000);
                })
                .catch((error) => {
                    this.request_form = {};
                    // console.log('FAILED: Send slack webhook', error);
                    // reject(new Error('FAILED: Send slack webhook'));
                });

            let config = {
                headers: {
                    Authorization:"Bearer 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",
                }
            };

            let data = {
                    "personalizations": [{"to": [{"email": 'divemaster@deepview.com'}]}],
                    "from": {"email": `${this.request_form.work_mail}`},
                    "subject": "Demo Request",
                    "content": [{"type": "text/plain", "value": `Hi <!here> ${this.request_form.fullname} requested for a demo details are attached bellow`}]
            };

            axios.post('https://api.sendgrid.com/v3/mail/send', JSON.stringify(data),config).then((response) => {
               console.log(response);
            })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted(){
        var decryptedBytes = CryptoJS.AES.decrypt('U2FsdGVkX19JdwpaM2JF1RcT4TCWDvndBCCa1TsVjGceiPmn//VQn6ybMoYxSyKwKsYSQV7j505YFzEgpMD9By5tQzhvmAlKSW0nYtCxDTEEbp09AzM7ixbgorRWCi7j\n', "196N4ZKknEgPkQ{4r%O>IQXcTg#IDKOpx3]4)v_[,*k:}RT#r%b5!N[5d(N13O5");
        this.url_data = decryptedBytes.toString(CryptoJS.enc.Utf8);
        // this.onbaordClients();
    },
});

const axios = require('axios');
const _3DES = require('nodejs3des');
const _value = 'deepview-website2.0';

exports.initNotifier = function(req, res) {
    // verify incoming data
    console.log(req.body);
    let decrypt =  _3DES.decrypt("Tk_ksodk-deep-web", `${req.headers.authorized}`); //SMS

    if (decrypt === _value || req.body.headers.host ==='deepview.com'){
        const options = {
            username: 'ClientBot', // This will appear as user name who posts the message
            text: `Hi <!here> ${req.body.request_form.fullname} requested for a demo details are attached bellow`, // <> are used for linking
            icon_emoji: ':bell:', // User icon, you can also use custom icons here
            attachments: [ // attachments, here we also use long attachment to use more space
                {
                    color: '#2eb886',
                    fields: [
                        {
                            title: 'Company',
                            value: `${req.body.request_form.company}`,
                            short: true
                        },
                        {
                            title: 'Work E-mail',
                            value: `${req.body.request_form.work_mail}`,
                            short: true
                        },
                        {
                            title: 'Position',
                            value: `${req.body.request_form.position}`,
                            short: true
                        },
                        {
                            title: 'Product of Interest',
                            value: `${req.body.checkedProduct}`,
                            short: false // marks this to be wide attachment
                        }
                    ],
                }
            ]
        };

        // Init notification stage 1
        axios.post('https://hooks.slack.com/services/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', JSON.stringify(options))
            .then((response) => {
                const data = {
                    status: 'success',
                    success_: {
                        status: 'user identified',
                        message: 'Message Sent successfully',
                        error_code: 200
                    }
                };
                return res.json(data).status(200)
            })
            .catch((error) => {
                const data = {
                    status: 'error',
                    success_: {
                        message: 'Unable to initiate slack notifier',
                        error_code: 400
                    }
                };
                return res.json(data).status(400)
            });

    }else {
        const data = {
            status: 'error',
            success_: {
                message: 'Unauthorized Access',
                error_code: 403
            }
        };
        return res.json(data).status(403)
    }


};




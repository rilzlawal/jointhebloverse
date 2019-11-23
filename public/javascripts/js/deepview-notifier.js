// const axios = require('axios');
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
             let config = {
                headers: {
                    authorized:"orTcpM8e5bF+8wVIgZj6gm9HtmuyXNYw",
                }
            };
            axios.post('login',this.$data, config)
                .then((response) => {
                    this.request_form = {};
                    // $('#requestDemo').click();
                    // setTimeout(function(){ iziToast.success({
                    //     id: null,
                    //     title: 'Success',
                    //     message: 'Your request has been received. A Divemastar will contact you shortly',
                    //     messageColor: '#fff',
                    //     messageSize: '',
                    //     messageLineHeight: '',
                    //     backgroundColor: '',
                    //     theme: 'dark', // dark
                    //     color: '#00ced1', // blue, red, green, yellow
                    //     imageWidth: 50,
                    //     maxWidth: null,
                    //     zindex: 999,
                    //     layout: 1,
                    //     position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    //     animateInside: true,
                    //     drag: true,
                    //     pauseOnHover: true,
                    //     progressBar: true,
                    //     progressBarColor: 'rgb(0, 255, 184)',
                    //     overlayColor: 'rgba(0, 0, 0, 0.6)',
                    //     transitionOut: 'fadeOut',
                    //     timeout: 3000
                    // }); }, 1000);
                })
                .catch((error) => {
                    this.request_form = {};
                    // console.log('FAILED: Send slack webhook', error);
                    // reject(new Error('FAILED: Send slack webhook'));
                });

        },
    },
});

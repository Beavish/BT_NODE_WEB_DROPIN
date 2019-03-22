var express = require('express');
var router = express.Router();
var braintree = require('braintree');


var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'g82dbc9xdvtp4yx9',
    publicKey: '48fyb5ymn75wc9tc',
    privateKey: '852d692a0cc251222382013e24df8244',
});

router.post('/', function (req, res, ) {
        var the_token = '8kf6fc';
        // e.g f28wm
        gateway.subscription.create({
            paymentMethodToken: the_token,
            planId: "KieransPlan"
        }, function (err, result) {
            console.log(result);
            result.success

                console.log("*************HELLO**************")
        });
   
   });



module.exports = router;
var express = require('express');
var router = express.Router();
var braintree = require('braintree');


var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'g82dbc9xdvtp4yx9',
    publicKey: '48fyb5ymn75wc9tc',
    privateKey: '852d692a0cc251222382013e24df8244',
});

router.post('/customer', function (req, res, next) {
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var email = req.body.email;
    var phone = req.body.phone;
    
  console.log(nonceFromTheClient);
    gateway.customer.create({
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phone,
        company: 'braintree',
        paymentMethodNonce: nonceFromTheClient
    }, function (err, result) {
        console.log(result);
        console.log(result.success);
        if (result.success) {
           
        }
        else {
            res.status(500).send(err);
        }
    });
    

});
module.exports = router;
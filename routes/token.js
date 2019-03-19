var express = require('express');
var router = express.Router();
var braintree = require('braintree');
var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'g82dbc9xdvtp4yx9',
    publicKey: '48fyb5ymn75wc9tc',
    privateKey: '852d692a0cc251222382013e24df8244',
  });
router.get('/', function (req, res, ) {

    gateway.clientToken.generate({}, function (err, response) {
        var client_token = response.clientToken;
        console.log("SERVER_SIDE" + " " + client_token);
        res.send(client_token);
    });

});
module.exports = router;
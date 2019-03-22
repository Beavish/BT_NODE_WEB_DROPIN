var express = require('express');
var router = express.Router();
var braintree = require('braintree');

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'g82dbc9xdvtp4yx9',
  publicKey: '48fyb5ymn75wc9tc',
  privateKey: '852d692a0cc251222382013e24df8244',
});
router.post('/', function (req, res, next) {

  // Use the payment method nonce here
  var nonceFromTheClient = req.body.paymentMethodNonce;
  // Create a new transaction for $10
  var newTransaction = gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonceFromTheClient,
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true,
      storeInVaultOnSuccess: true
      
    },
    //Kount 
    deviceData: req.body.device_data



  }, function (error, result) {
    if (result) {
      res.send(result);

    } else {
      res.status(500).send(error);
    }
  });




});

module.exports = router;
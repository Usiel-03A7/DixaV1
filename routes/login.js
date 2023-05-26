const {auth} = require("../firebase")
const {signInWithEmailAndPassword} = require("firebase/auth")
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

/*Post form */
router.post('/', function(req, res, next) {
  const {email,password} = req.body;
  

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    res.redirect('/profileUs')
    // ...
  })
  .catch((error) => {

    res.redirect('/login') //se pueden mandar datos por el link para ver si se puede mandar un alert y se llaman queri params 
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});

module.exports = router;

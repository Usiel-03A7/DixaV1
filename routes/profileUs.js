var express = require('express');
const {app} = require('../firebase')
var router = express.Router();
const { getFirestore, collection, addDoc } = require('firebase/firestore')
const firestore =  getFirestore(app);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('profileUs');
});


router.post('/create/post', async function(req, res, next) {
  
  try {
    console.log(req.body);
    const {title, image} = req.body;

    const docRef = await addDoc(collection(firestore, "images"), {
      title, 
      image
    });
    console.log("Document written with ID: ", docRef.id);
    res.json({success: true});
  } catch (e) {
    console.error("Error adding document: ", e);
    res.json({
      success: false,
      error: e
    });
  }

});
module.exports = router;

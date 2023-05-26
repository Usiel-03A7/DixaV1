var express = require('express');
var router = express.Router();
const {getFirestore, collection, getDocs}  = require('firebase/firestore');
const {app} = require ('../firebase')
const firestore = getFirestore(app)

/* GET home page. */
router.get('/',async  function(req, res, next) {

const querySnapshot = await getDocs(collection(firestore, "images"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
  const datos = querySnapshot.docs.map((doc)=>{
    const post = doc.data()
    return {title: post.title,image: post.image.display_url}
  })
  
  res.render('index', {datos});

});


module.exports = router;

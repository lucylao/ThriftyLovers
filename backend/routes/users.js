var express = require('express');
var router = express.Router();
let db = require('../db/queries')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/new', db.registerUser);
router.post('/login', db.authUser);
router.get('/art', db.artFetch);
router.get('/user', db.getSingleUser);
// router.get('/user/:user_id', db.grabProfileInfo )

module.exports = router;

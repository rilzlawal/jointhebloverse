var express = require('express');
var router = express.Router();
const home = require('../controllers/app');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.post('/login', home.initNotifier);


module.exports = router;

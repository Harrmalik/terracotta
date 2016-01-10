var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Terra Cotta Coffee House' });
});

router.get('/addLike', function(req, res, next) {
    var vm = {
        title: 'Terra Cotta Coffee House',
        view: "2"
    }
  res.render('index', vm);
});

module.exports = router;

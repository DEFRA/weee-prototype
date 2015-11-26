var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});



// routes for producers/de
router.post('/producers/delete/delete-confirmation', function (req,res) {
  if (req.body['radio-inline-group']==="Yes"){
    res.redirect('/producers/delete/delete-confirmation-yes');
  } else {
    res.redirect('/producers/delete/index');
  }
});

module.exports = router;

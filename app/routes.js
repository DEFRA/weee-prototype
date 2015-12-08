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

router.post('/producers/delete/delete-confirmation-single', function (req,res) {
  if (req.body['radio-inline-group']==="Yes"){
    res.redirect('/producers/delete/delete-confirmation-yes-single');
  } else {
    res.redirect('/producers/delete/index-single');
  }
});

router.post('/producers/delete/delete-confirmation-2', function (req,res) {
  if (req.body['radio-inline-group']==="Yes"){
    res.redirect('/producers/delete/delete-confirmation-yes-2');
  } else {
    res.redirect('/producers/delete/index-2');
  }
});

router.post('/producers/delete/delete-confirmation-3', function (req,res) {
  if (req.body['radio-inline-group']==="Yes"){
    res.redirect('/producers/delete/delete-confirmation-yes-3');
  } else {
    res.redirect('/producers/delete/index-3');
  }
});

router.post('/producers/delete/delete-confirmation-4', function (req,res) {
  if (req.body['radio-inline-group']==="Yes"){
    res.redirect('/producers/delete/delete-confirmation-yes-4');
  } else {
    res.redirect('/producers/delete/index-4');
  }
});

router.post('/producers/delete/delete-confirmation-5', function (req,res) {
  if (req.body['radio-inline-group']==="Yes"){
    res.redirect('/producers/delete/delete-confirmation-yes-5');
  } else {
    res.redirect('/producers/delete/index-5');
  }
});



router.post('/schemes/datareturnmenu', function (req,res) {
  if (req.body['radio-inline-group']==="View data returns"){
    res.redirect('/schemes/viewreturns');
  } else {
    res.redirect('/schemes/datareturnmenu');
  }
});

router.post('/schemes/index-2', function (req,res) {
  if (req.body['radio-inline-group']==="Manage EEE/WEEE data returns"){
    res.redirect('/schemes/datareturnmenu');
  } else {
    res.redirect('/schemes/index-2');
  }
});

module.exports = router;

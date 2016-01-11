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
  }
  else {
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


router.post('/producers/delete/delete-confirmation-6', function (req,res) {
  if (req.body['radio-inline-group']==="Yes"){
    res.redirect('/producers/delete/delete-confirmation-yes-6');
  } else {
    res.redirect('/producers/delete/index-6');
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

  }

  else {
    res.redirect('/schemes/index-2');
  }
});



router.post('/producers/eee-data/index', function (req,res) {
  if (req.body['radio-inline-group']==="View producer information"){
    res.redirect('/producers/eee-data/find');
  } else {
    res.redirect('/producers/eee-data/index');
  }
});





/* Notice address journey */

router.post('/register/main-contact-address', function (req,res) {
    res.redirect('/register/phone-email');

});


router.post('/register/address-lookup', function (req,res) {
    res.redirect('/register/address-lookup-2');

});

router.post('/register/address-lookup-2', function (req,res) {
    res.redirect('/register/phone-email');

});

router.post('/register/phone-email', function (req,res) {
    res.redirect('/register/registered-office-check');

});


router.post('/notice-address/reg-company', function (req,res) {
    res.redirect('/notice-address/main-contact');

});

router.post('/notice-address/main-contact', function (req,res) {
    res.redirect('/notice-address/main-contact-address');

});

router.post('/notice-address/main-contact-address', function (req,res) {
    res.redirect('/notice-address/reg-office-same');

});

router.post('/notice-address/reg-office-details', function (req,res) {
    res.redirect('/notice-address/notice-address-same');

});

router.post('/notice-address/notice-address-details', function (req,res) {
    res.redirect('/notice-address/summary');

});

router.post('/notice-address/business-trading-name', function (req,res) {
    res.redirect('/notice-address/main-contact-partnership');

});

router.post('/notice-address/main-contact-partnership', function (req,res) {
    res.redirect('/notice-address/main-contact-address-partnership');

});
router.post('/notice-address/main-contact-address-partnership', function (req,res) {
    res.redirect('/notice-address/principal-place-same');

});

router.post('/notice-address/notice-address-details-principal', function (req,res) {
    res.redirect('/notice-address/summary-principal');

});

router.post('/notice-address/principal-place-details', function (req,res) {
    res.redirect('/notice-address/notice-address-same-principal');

});

router.post('/notice-address/reg-office-same', function (req,res) {
  if (req.body['SelectedValue']==="Yes"){
    res.redirect('/notice-address/notice-address-same');

  }

  else {
    res.redirect('/notice-address/reg-office-details');
  }
});

router.post('/notice-address/principal-place-same', function (req,res) {
  if (req.body['SelectedValue']==="Yes"){
    res.redirect('/notice-address/notice-address-same-principal');

  }

  else {
    res.redirect('/notice-address/principal-place-details');
  }
});

router.post('/notice-address/notice-address-same-principal', function (req,res) {
  if (req.body['SelectedValue']==="A new address"){
    res.redirect('/notice-address/notice-address-details-principal');

  }

  else {
    res.redirect('/notice-address/summary-principal');
  }
});


router.post('/notice-address/notice-address-same', function (req,res) {
  if (req.body['SelectedValue']==="A new address"){
    res.redirect('/notice-address/notice-address-details');

  }

  else {
    res.redirect('/notice-address/summary');
  }
});




module.exports = router;

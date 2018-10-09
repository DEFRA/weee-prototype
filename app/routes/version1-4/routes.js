const router = require('express').Router();
const Address = require('../../data/address');
const Facility = require('../../data/facility');
const Period = require('../../data/period');
const Operator = require('../../data/operator');
const Categories = require('../../data/categories');
const Scheme = require('../../data/scheme');

router.get('/version1-4/AATF-Returns/SC002_1-My-facilities', function (req, res) {
    var period = req.session.data['period'];
    var facility = period._facilities[1];
    res.render('version1-4/AATF-Returns/SC002_1-My-facilities');
})

router.get('/version1-4/AATF-Returns/Are-you-sending-any-WEEE-to-another-ATF-for-treatment', function(req, res){
    res.render('version1-4/AATF-Returns/SC016-Are-you-sending-any-WEEE-to-another-ATF-for-treatment');
})

router.get('/version1-4/AATF-Returns/SC004-Would-you-like-to-report-on-any-non-obligated-weee', function (req, res) {
    res.render('version1-4/AATF-Returns/SC004-Would-you-like-to-report-on-any-non-obligated-weee')
})

router.get('/version1-4/AATF-Returns/aatf-option-select', function(req, res){
    if (req.session.data['aatf-return-option'] === 'aatfReturn')
    {
        res.redirect('/version1-4/AATF-Returns/PCS-Table');
    }
    if (req.session.data['aatf-return-option'] === 'aatfNilReturn')
    {
        res.redirect('/version1-4/facilityDisplay');
    }
    if (req.session.data['aatf-return-option'] === 'aatfUpload')
    {
        res.redirect('/version1-4/facilityDisplay');
    }
})

router.post('/version1-4/add-scheme', function (req, res) {
    //var facility = req.session.data['facilities'].filter(facility => facility.name = 'facility 1');
    var facilities = req.session.data['facilities'];
    var name = req.session.data['schemeName'];
    var newFac = new Facility(name, 5);
    facilities.push(newFac);
    req.session.data['facilities'] = facilities;
    res.redirect('/version1-4/facilityDisplay')
})


router.post('/version1-4/login-button', function (req, res) {
    res.redirect('/version1-4/SC002-What-would-you-like-to-do')
})

router.post('/version1-4/AATF-Returns/save-and-continue', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC004-Are-you-reporting-on-any-non-obligated-weee')
})

router.get('/version1-4/AATF-Returns/Make-an-AATF-return-options', function(req, res){
    var selectedFacility = req.session.data['period']._facilities.filter(function(facility){
        console.log(req.query['facilityId']);
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])){
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];
    
    console.log('selected facility ' + req.session.data['selectedFacility']._name);
    console.log('selected facility id ' + req.session.data['selectedFacility']._id);
   
    res.redirect('/version1-4/AATF-Returns/SC002_1a-Make-an-AATF-return-options');
})
router.post('/version1-4/AATF-Returns/save-and-continue-change', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC009-b2b'], req.session.data['small-household-appliances-input-SC009-b2b'], req.session.data['it-and-telecomms-input-SC009-b2b'], req.session.data['consumer-equipment-input-SC009-b2b'], req.session.data['lighting-equipment-input-SC009-b2b'], req.session.data['electrical-and-electronic-input-SC009-b2b'], req.session.data['toys-leisure-sports-input-SC009-b2b'], req.session.data['medical-devices-input-SC009-b2b'], req.session.data['monitoring-control-input-SC009-b2b'], req.session.data['automatic-dispensers-input-SC009-b2b'], req.session.data['display-equipment-input-SC009-b2b'], req.session.data['cooling-appliance-input-SC009-b2b'], req.session.data['gas-discharge-led-input-SC009-b2b'], req.session.data['photovolatic-panels-input-SC009-b2b']]

    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['WEEE-received-for-treatment-result'] = result.toFixed(3);

    var items = [req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC010-b2b'], req.session.data['small-household-appliances-input-SC010-b2b'], req.session.data['it-and-telecomms-input-SC010-b2b'], req.session.data['consumer-equipment-input-SC010-b2b'], req.session.data['lighting-equipment-input-SC010-b2b'], req.session.data['electrical-and-electronic-input-SC010-b2b'], req.session.data['toys-leisure-sports-input-SC010-b2b'], req.session.data['medical-devices-input-SC010-b2b'], req.session.data['monitoring-control-input-SC010-b2b'], req.session.data['automatic-dispensers-input-SC010-b2b'], req.session.data['display-equipment-input-SC010-b2b'], req.session.data['cooling-appliance-input-SC010-b2b'], req.session.data['gas-discharge-led-input-SC010-b2b'], req.session.data['photovolatic-panels-input-SC010-b2b']]

    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = result.toFixed(3)

    var items = [req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC011-b2b'], req.session.data['small-household-appliances-input-SC011-b2b'], req.session.data['it-and-telecomms-input-SC011-b2b'], req.session.data['consumer-equipment-input-SC011-b2b'], req.session.data['lighting-equipment-input-SC011-b2b'], req.session.data['electrical-and-electronic-input-SC011-b2b'], req.session.data['toys-leisure-sports-input-SC011-b2b'], req.session.data['medical-devices-input-SC011-b2b'], req.session.data['monitoring-control-input-SC011-b2b'], req.session.data['automatic-dispensers-input-SC011-b2b'], req.session.data['display-equipment-input-SC011-b2b'], req.session.data['cooling-appliance-input-SC011-b2b'], req.session.data['gas-discharge-led-input-SC011-b2b'], req.session.data['photovolatic-panels-input-SC011-b2b']]

    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)
    
    res.redirect('/version1-4/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-4/AATF-Returns/non-obligated-save', function (req, res) {

    var period = req.session.data.period;
    var currentOperator = period._operator;

    currentOperator._categories = new Categories(req.session.data['large-household-appliances-input-SC004'],
    req.session.data['small-household-appliances-input-SC004'],
    req.session.data['it-and-telecomms-input-SC004'],
    req.session.data['consumer-equipment-input-SC004'],
    req.session.data['lighting-equipment-input-SC004'],
    req.session.data['electrical-and-electronic-input-SC004'],
    req.session.data['toys-leisure-sports-input-SC004'],
    req.session.data['medical-devices-input-SC004'],
    req.session.data['monitoring-control-input-SC004'],
    req.session.data['automatic-dispensers-input-SC004'],
    req.session.data['display-equipment-input-SC004'],
    req.session.data['cooling-appliance-input-SC004'],
    req.session.data['gas-discharge-led-input-SC004'],
    req.session.data['photovolatic-panels-input-SC004']);

    req.session.data.period = period;
    
    res.redirect('/version1-4/AATF-Returns/SC004_2-Are-you-reporting-on-any-non-obligated-weee-as-retained-by-a-dcf')
})

router.post('/version1-4/AATF-Returns/dcf-save', function (req, res) {
    
    var period = req.session.data.period;
    var currentOperator = period._operator;
    
    currentOperator._categoriesDcf = new Categories(req.session.data['large-household-appliances-input-SC004c-DCF'],
    req.session.data['small-household-appliances-input-SC004c-DCF'],
    req.session.data['it-and-telecomms-input-SC004c-DCF'],
    req.session.data['consumer-equipment-input-SC004c-DCF'],
    req.session.data['lighting-equipment-input-SC004c-DCF'],
    req.session.data['electrical-and-electronic-input-SC004c-DCF'],
    req.session.data['toys-leisure-sports-input-SC004c-DCF'],
    req.session.data['medical-devices-input-SC004c-DCF'],
    req.session.data['monitoring-control-input-SC004c-DCF'],
    req.session.data['automatic-dispensers-input-SC004c-DCF'],
    req.session.data['display-equipment-input-SC004c-DCF'],
    req.session.data['cooling-appliance-input-SC004c-DCF'],
    req.session.data['gas-discharge-led-input-SC004c-DCF'],
    req.session.data['photovolatic-panels-input-SC004c-DCF']);

    req.session.data.period = period;

    res.redirect('/version1-4/AATF-Returns/SC002_1-My-facilities');
})

router.post('/version1-4/AATF-Returns/facility-save', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.post('/version1-4/AATF-Returns/facility-save-change', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC009-b2b'], req.session.data['small-household-appliances-input-SC009-b2b'], req.session.data['it-and-telecomms-input-SC009-b2b'], req.session.data['consumer-equipment-input-SC009-b2b'], req.session.data['lighting-equipment-input-SC009-b2b'], req.session.data['electrical-and-electronic-input-SC009-b2b'], req.session.data['toys-leisure-sports-input-SC009-b2b'], req.session.data['medical-devices-input-SC009-b2b'], req.session.data['monitoring-control-input-SC009-b2b'], req.session.data['automatic-dispensers-input-SC009-b2b'], req.session.data['display-equipment-input-SC009-b2b'], req.session.data['cooling-appliance-input-SC009-b2b'], req.session.data['gas-discharge-led-input-SC009-b2b'], req.session.data['photovolatic-panels-input-SC009-b2b']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['WEEE-received-for-treatment-result'] = result.toFixed(3);

    var items = [req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC010-b2b'], req.session.data['small-household-appliances-input-SC010-b2b'], req.session.data['it-and-telecomms-input-SC010-b2b'], req.session.data['consumer-equipment-input-SC010-b2b'], req.session.data['lighting-equipment-input-SC010-b2b'], req.session.data['electrical-and-electronic-input-SC010-b2b'], req.session.data['toys-leisure-sports-input-SC010-b2b'], req.session.data['medical-devices-input-SC010-b2b'], req.session.data['monitoring-control-input-SC010-b2b'], req.session.data['automatic-dispensers-input-SC010-b2b'], req.session.data['display-equipment-input-SC010-b2b'], req.session.data['cooling-appliance-input-SC010-b2b'], req.session.data['gas-discharge-led-input-SC010-b2b'], req.session.data['photovolatic-panels-input-SC010-b2b']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = result.toFixed(3)

    var items = [req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC011-b2b'], req.session.data['small-household-appliances-input-SC011-b2b'], req.session.data['it-and-telecomms-input-SC011-b2b'], req.session.data['consumer-equipment-input-SC011-b2b'], req.session.data['lighting-equipment-input-SC011-b2b'], req.session.data['electrical-and-electronic-input-SC011-b2b'], req.session.data['toys-leisure-sports-input-SC011-b2b'], req.session.data['medical-devices-input-SC011-b2b'], req.session.data['monitoring-control-input-SC011-b2b'], req.session.data['automatic-dispensers-input-SC011-b2b'], req.session.data['display-equipment-input-SC011-b2b'], req.session.data['cooling-appliance-input-SC011-b2b'], req.session.data['gas-discharge-led-input-SC011-b2b'], req.session.data['photovolatic-panels-input-SC011-b2b']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)

    res.redirect('/version1-4/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-4/AATF-Returns/facility-cancel', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC005-Select-Facility')
})

router.post('/version1-4/AATF-Returns/facility-confirm', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC006x-Do-you-want-to-report-on-multiple-pcs')
})

router.post('/version1-4/AATF-Returns/scheme-add', function (req, res) {
    req.session.data['WEEE-received-for-treatment-result'] = "0.000"
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = "0.000"
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = "0.000"
    res.redirect('/version1-4/AATF-Returns/SC006_1a-Is-this-the-correct-PCS-that-you-wish-to-report-on')
})

router.post('/version1-4/AATF-Returns/scheme-confirm', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC007-PCS-Table')
})


router.post('/version1-4/AATF-Returns/scheme-cancel', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC007-PCS-Table')
})

router.get('/version1-4/AATF-Returns/PCS-Table', function(req, res) {   
    console.log('PCS Table selected facility ' + req.session.data['selectedFacility']._name);
    console.log('PCS Table selected facility id ' + req.session.data['selectedFacility']._id);
    
    res.redirect('/version1-4/AATF-Returns/SC007-PCS-Table');
})



router.post('/version1-4/AATF-Returns/add-pcs', function (req, res) {
    var period = req.session.data['period'];
    var currentFacility = req.session.data['selectedFacility'];

    var selectedScheme = req.session.data.schemes._schemes.filter(function(scheme){
        console.log(req.session.data.schemeselect);
        if (scheme._id === req.session.data['schemeselect']){
            return true;
        }
    }); 

    currentFacility._pcs.push(selectedScheme[0]);
    req.session.data['selectedFacility'] = currentFacility;
    req.session.data.period = period;

    res.redirect('/version1-4/AATF-Returns/SC007-PCS-Table')
})

router.post('/version1-4/AATF-Returns/weee-received-for-treatment-save', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC009-b2b'], req.session.data['small-household-appliances-input-SC009-b2b'], req.session.data['it-and-telecomms-input-SC009-b2b'], req.session.data['consumer-equipment-input-SC009-b2b'], req.session.data['lighting-equipment-input-SC009-b2b'], req.session.data['electrical-and-electronic-input-SC009-b2b'], req.session.data['toys-leisure-sports-input-SC009-b2b'], req.session.data['medical-devices-input-SC009-b2b'], req.session.data['monitoring-control-input-SC009-b2b'], req.session.data['automatic-dispensers-input-SC009-b2b'], req.session.data['display-equipment-input-SC009-b2b'], req.session.data['cooling-appliance-input-SC009-b2b'], req.session.data['gas-discharge-led-input-SC009-b2b'], req.session.data['photovolatic-panels-input-SC009-b2b']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['WEEE-received-for-treatment-result'] = result.toFixed(3);    
    res.redirect('/version1-4/AATF-Returns/SC016-Are-you-sending-any-WEEE-to-another-ATF-for-treatment');
})

router.post('/version1-4/AATF-Returns/weee-reused-as-a-whole-appliance-save', function (req, res) {
    var itemsb2b = [req.session.data['large-household-appliances-input-SC010-b2b'], req.session.data['small-household-appliances-input-SC010-b2b'], req.session.data['it-and-telecomms-input-SC010-b2b'], req.session.data['consumer-equipment-input-SC010-b2b'], req.session.data['lighting-equipment-input-SC010-b2b'], req.session.data['electrical-and-electronic-input-SC010-b2b'], req.session.data['toys-leisure-sports-input-SC010-b2b'], req.session.data['medical-devices-input-SC010-b2b'], req.session.data['monitoring-control-input-SC010-b2b'], req.session.data['automatic-dispensers-input-SC010-b2b'], req.session.data['display-equipment-input-SC010-b2b'], req.session.data['cooling-appliance-input-SC010-b2b'], req.session.data['gas-discharge-led-input-SC010-b2b'], req.session.data['photovolatic-panels-input-SC010-b2b']]
    var items = [req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = result.toFixed(3)
    res.redirect('/version1-4/AATF-Returns/SC016-Reuse-Table')
})

router.post('/version1-4/AATF-Returns/weee-reused-as-a-whole-appliance-this-facility-save', function (req, res) {
    var itemsb2b = [req.session.data['large-household-appliances-input-SC010-b2b'], req.session.data['small-household-appliances-input-SC010-b2b'], req.session.data['it-and-telecomms-input-SC010-b2b'], req.session.data['consumer-equipment-input-SC010-b2b'], req.session.data['lighting-equipment-input-SC010-b2b'], req.session.data['electrical-and-electronic-input-SC010-b2b'], req.session.data['toys-leisure-sports-input-SC010-b2b'], req.session.data['medical-devices-input-SC010-b2b'], req.session.data['monitoring-control-input-SC010-b2b'], req.session.data['automatic-dispensers-input-SC010-b2b'], req.session.data['display-equipment-input-SC010-b2b'], req.session.data['cooling-appliance-input-SC010-b2b'], req.session.data['gas-discharge-led-input-SC010-b2b'], req.session.data['photovolatic-panels-input-SC010-b2b']]
    var items = [req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['WEEE-resused-as-a-whole-appliance-this-facility-result'] = result.toFixed(3)
    res.redirect('/version1-4/AATF-Returns/SC008_3-Is-this-whole-weee-being-sent-to-another-site')
})

router.post('/version1-4/AATF-Returns/Whole-WEEE-sent-to-another-treatment-save', function (req, res) {    
    console.log(req.session.data.facilityId);

    var items = [req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC011-b2b'], req.session.data['small-household-appliances-input-SC011-b2b'], req.session.data['it-and-telecomms-input-SC011-b2b'], req.session.data['consumer-equipment-input-SC011-b2b'], req.session.data['lighting-equipment-input-SC011-b2b'], req.session.data['electrical-and-electronic-input-SC011-b2b'], req.session.data['toys-leisure-sports-input-SC011-b2b'], req.session.data['medical-devices-input-SC011-b2b'], req.session.data['monitoring-control-input-SC011-b2b'], req.session.data['automatic-dispensers-input-SC011-b2b'], req.session.data['display-equipment-input-SC011-b2b'], req.session.data['cooling-appliance-input-SC011-b2b'], req.session.data['gas-discharge-led-input-SC011-b2b'], req.session.data['photovolatic-panels-input-SC011-b2b']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)
    res.redirect('/version1-4/AATF-Returns/SC016_1-Add-a-table-here-for-the-ATF-treatment')
})

router.post('/version1-4/AATF-Returns/add-another-scheme', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC012-Would-you-like-to-add-another-scheme')
})

router.post('/version1-4/AATF-Returns/atf-treatment-save', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC008-Do-you-need-to-report-any-WEEE-reused-as-a-whole-appliance')
})

router.post('/version1-4/AATF-Returns/reuse-treatment-save', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC017-What-do-you-want-to-do-now')
})

router.post('/version1-4/AATF-Returns/upload-an-aatf-return-select', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC002_1-My-facilities')
})

router.post('/version1-4/AATF-Returns/upload-an-aatf-return', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC014_1-Upload-an-aatf-return-browse')
})

router.post('/version1-4/AATF-Returns/add-another-scheme-answer', function (req, res) {
    let answer = req.session.data['another-scheme']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC007-AATF-Tasklist')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC006-Add-Scheme')
    }
})

router.post('/version1-4/AATF-Returns/whole-weee-answer', function (req, res) {
    let answer = req.session.data['whole-weee']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC008-Do-you-need-to-report-any-WEEE-reused-as-a-whole-appliance')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC016_2-Which-operator-is-this-WEEE-being-sent-to-for-treatment?facility=' + req.session.data.facilityId + '&facilityId=' + req.session.data.facilityId + '&scheme=' + req.session.data.scheme + '&schemeId=' + req.session.data.schemeId)
    }
})

router.post('/version1-4/AATF-Returns/aatf-option-select', function (req, res) {
    let answer = req.session.data['aatf-return-option']

    if (answer === '1') {
        res.redirect('/version1-4/AATF-Returns/SC006_1-What-PCS-do-you-want-to-report-on')
    } else if (answer === '3') {
        res.redirect('/version1-4/AATF-Returns/SC014-Upload-an-aatf-return')
    }
})

router.post('/version1-4/AATF-Returns/what-to-do-select', function (req, res) {
    let answer = req.session.data['what-to-do-option']

    if (answer === '1') {
        res.redirect('/version1-4/AATF-Returns/SC015-Check-your-AATF-return')
    } else if (answer === '2') {
        res.redirect('/version1-4/AATF-Returns/SC007-PCS-Table')
    } else if (answer === '3') {
        res.redirect('/version1-4/AATF-Returns/SC002_1-My-facilities')
    }
})

router.post('/version1-4/AATF-Returns/multiple-scheme-select-answer', function (req, res) {
    let answer = req.session.data['multiple-scheme-select']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC006-Add-Scheme')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC006-Add-the-PCS-that-you-wish-to-report')
    }
})

router.post('/version1-4/AATF-Returns/multiple-pcs-save', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC007-PCS-Table')
})

router.post('/version1-4/AATF-Returns/pcs-check-my-return', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC015-Check-your-AATF-return')
})

router.post('/version1-4/AATF-Returns/reusing-weee-answer', function (req, res) {
    let answer = req.session.data['reusing-weee']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC017-What-do-you-want-to-do-now')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC008_2-Enter-WEEE-that-has-been-reused-as-a-whole-appliance')
        
        //res.redirect('/version1-4/AATF-Returns/SC008_1-Is-this-whole-weee-being-reused-at-this-facility')
    }
})

router.post('/version1-4/AATF-Returns/reusing-weee-answer-2', function (req, res) {
    let answer = req.session.data['reusing-weee-2']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC015-Check-your-AATF-return')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC008b-Operator-Address-Postcode-Locator-2')
        
        //res.redirect('/version1-4/AATF-Returns/SC008_1-Is-this-whole-weee-being-reused-at-this-facility')
    }
})

router.post('/version1-4/AATF-Returns/reusing-weee-at-this-facility-answer', function (req, res) {
    let answer = req.session.data['reusing-weee-at-this-facility']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC008_3-Is-this-whole-weee-being-sent-to-another-site')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC010-WEEE-reused-as-a-whole-appliance-this-facility')
    }
})

router.post('/version1-4/AATF-Returns/reusing-weee-sent-to-another-site-answer', function (req, res) {
    let answer = req.session.data['reusing-weee-sent-to-another-site']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC007-PCS-Table')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC008_7-Enter-name-and-address-of-all-sites')
    }
})

router.post('/version1-4/AATF-Returns/operator-details-answer', function (req, res) {
    let answer = req.session.data['operator-details']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC008c-Facility-Address-Locator')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC007-AATF-Tasklist')
    }
})

router.post('/version1-4/AATF-Returns/atf-same-as-operator-answer', function (req, res) {
    let answer = req.session.data['atf-same-as-operator']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC016_2b-Provide-the-address-of-the-atf')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment')
    }
})

router.post('/version1-4/AATF-Returns/non-obligated-weee-answer', function (req, res) {
    let answer = req.session.data['non-obligated-weee']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC002_1-My-facilities')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC004_1-Enter-non-obligated-WEEE')
    }
})

router.post('/version1-4/AATF-Returns/non-obligated-weee-DCF-answer', function (req, res) {
    let answer = req.session.data['non-obligated-weee-DCF']

    if (answer === 'false') {
        res.redirect('/version1-4/AATF-Returns/SC002_1-My-facilities')
    } else {
        res.redirect('/version1-4/AATF-Returns/SC004_2a-Add-any-DCF-data')
    }
})

router.post('/version1-4/AATF-Returns/operator-address-full-save', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-4/AATF-Returns/operator-address-postcode-save', function (req, res) {

    var pcsId = req.session.data['pcsId'];
    var pcs = req.session.data['pcs'];

    res.redirect('/version1-4/AATF-Returns/SC016_2a-Is-the-atf-address-the-same-as-the-facility')
})

router.post('/version1-4/AATF-Returns/operator-address-postcode-atf-save', function (req, res) {

    var pcsId = req.session.data['pcsId'];
    var pcs = req.session.data['pcs'];

    res.redirect('/version1-4/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment')
})

router.post('/version1-4/AATF-Returns/operator-address-postcode-save-2', function (req, res) {
    var pcsId = req.session.data['pcsId'];
    var pcs = req.session.data['pcs'];

    res.redirect('/version1-4/AATF-Returns/SC008_7-Enter-name-and-address-of-all-sites')
})

router.post('/version1-4/AATF-Returns/submit-scheme-for-approval', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC015-Check-your-AATF-return')
})

router.post('/version1-4/AATF-Returns/submit-aatf-return', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC016-Submission-complete')
})

router.post('/version1-4/AATF-Returns/facility-address-postcode-save', function (req, res) {
    res.redirect('/version1-4/AATF-Returns/SC007-AATF-Tasklist')
})

module.exports = router;
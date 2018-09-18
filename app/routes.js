const express = require('express')
const router = express.Router()
var counter = 1;

// Add your routes here - above the module.exports line
router.get('/', function (req, res) {
    res.redirect('/SC001-Home')
})

router.get('/AATF-Returns/SC005a-Select-Facility-Confirmation', function (req, res) {
    var facility = req.session.data['facilitySelect']
    if (facility == '') {
        req.session.data['facilitySelect'] = "Facility 3232"
    }
    res.render('AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.get('/AATF-Returns/SC007-AATF-Tasklist', function (req, res) {
    var facility = req.session.data['facilitySelect']
    if (facility == '') {
        req.session.data['facilitySelect'] = "Facility 32323"
    }
    res.render('AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/login-button', function (req, res) {
    res.redirect('/SC002-Portal-Landing-Page')
})

router.post('/AATF-Returns/save-and-continue', function (req, res) {
    res.redirect('/AATF-Returns/SC004-Non-Obligated-WEEE')
})

router.post('/AATF-Returns/save-and-continue-change', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['WEEE-received-for-treatment-result'] = result.toFixed(3);

    var items = [req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = result.toFixed(3)

    var items = [req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)
    
    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/non-obligated-save', function (req, res) {
    res.redirect('/AATF-Returns/SC005-Select-Facility')
})

router.post('/AATF-Returns/facility-save', function (req, res) {
    res.redirect('/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.post('/AATF-Returns/facility-save-change', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['WEEE-received-for-treatment-result'] = result.toFixed(3);

    var items = [req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = result.toFixed(3)

    var items = [req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)

    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/facility-cancel', function (req, res) {
    res.redirect('/AATF-Returns/SC005-Select-Facility')
})

router.post('/AATF-Returns/facility-confirm', function (req, res) {
    res.redirect('/AATF-Returns/SC006-Add-Scheme')
})

router.post('/AATF-Returns/scheme-add', function (req, res) {
    req.session.data['WEEE-received-for-treatment-result'] = "0.000"
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = "0.000"
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = "0.000"
    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/weee-received-for-treatment-save', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['WEEE-received-for-treatment-result'] = result.toFixed(3);
    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/weee-reused-as-a-whole-appliance-save', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = result.toFixed(3)
    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/Whole-WEEE-sent-to-another-treatment-save', function (req, res) {
    var items = [req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)
    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/add-another-scheme', function (req, res) {
    res.redirect('/AATF-Returns/SC012-Would-you-like-to-add-another-scheme')
})

router.post('/AATF-Returns/add-another-scheme-answer', function (req, res) {
    let answer = req.session.data['another-scheme']

    if (answer === 'false') {
        res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
    } else {
        res.redirect('/AATF-Returns/SC006-Add-Scheme')
    }
})

router.post('/AATF-Returns/operator-details-answer', function (req, res) {
    let answer = req.session.data['operator-details']

    if (answer === 'false') {
        res.redirect('/AATF-Returns/SC008b-Operator-Address-Postcode-Locator')
    } else {
        res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
    }
})

router.post('/AATF-Returns/operator-address-full-save', function (req, res) {
    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/operator-address-postcode-save', function (req, res) {
    res.redirect('/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/AATF-Returns/submit-scheme-for-approval', function (req, res) {
    res.redirect('/AATF-Returns/SC015-Check-your-AATF-return')
})

router.post('/AATF-Returns/submit-aatf-return', function (req, res) {
    res.redirect('/AATF-Returns/SC016-Submission-complete')
})

module.exports = router

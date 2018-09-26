const express = require('express')
const router = express.Router()

//Index route
router.get('/', function (req, res) {
    res.redirect('/version1-2/SC001-Home')
})

//#region version 1 routes
// Add your routes here - above the module.exports line
router.get('/', function (req, res) {
    res.redirect('/version1-1/SC001-Home')
})

router.get('/version1-1/AATF-Returns/SC005a-Select-Facility-Confirmation', function (req, res) {
    var facility = req.session.data['facilitySelect']
    if (facility == '') {
        req.session.data['facilitySelect'] = "Facility 3232"
    }
    res.render('version1-1/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.get('/version1-1/AATF-Returns/SC007-AATF-Tasklist', function (req, res) {
    var facility = req.session.data['facilitySelect']
    if (facility == '') {
        req.session.data['facilitySelect'] = "Facility 32323"
    }
    res.render('version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-1/login-button', function (req, res) {
    res.redirect('/version1-1/SC002-Portal-Landing-Page')
})

router.post('/version1-1/AATF-Returns/save-and-continue', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC004-Non-Obligated-WEEE')
})

router.post('/version1-1/AATF-Returns/save-and-continue-change', function (req, res) {
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
    
    res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-1/AATF-Returns/non-obligated-save', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC005-Select-Facility')
})

router.post('/version1-1/AATF-Returns/facility-save', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.post('/version1-1/AATF-Returns/facility-save-change', function (req, res) {
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

    res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-1/AATF-Returns/facility-cancel', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC005-Select-Facility')
})

router.post('/version1-1/AATF-Returns/facility-confirm', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC006-Add-Scheme')
})

router.post('/version1-1/AATF-Returns/scheme-add', function (req, res) {
    req.session.data['WEEE-received-for-treatment-result'] = "0.000"
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = "0.000"
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = "0.000"
    res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-1/AATF-Returns/weee-received-for-treatment-save', function (req, res) {
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
    res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-1/AATF-Returns/weee-reused-as-a-whole-appliance-save', function (req, res) {
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
    res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-1/AATF-Returns/Whole-WEEE-sent-to-another-treatment-save', function (req, res) {
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
    res.redirect('/version1-1/AATF-Returns/SC008b-Operator-Address-Postcode-Locator')
})

router.post('/version1-1/AATF-Returns/add-another-scheme', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC012-Would-you-like-to-add-another-scheme')
})

router.post('/version1-1/AATF-Returns/add-another-scheme-answer', function (req, res) {
    let answer = req.session.data['another-scheme']

    if (answer === 'false') {
        res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
    } else {
        res.redirect('/version1-1/AATF-Returns/SC006-Add-Scheme')
    }
})

router.post('/version1-1/AATF-Returns/operator-details-answer', function (req, res) {
    let answer = req.session.data['operator-details']

    if (answer === 'false') {
        res.redirect('/version1-1/AATF-Returns/SC008c-Facility-Address-Locator')
    } else {
        res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
    }
})


router.post('/version1-1/AATF-Returns/operator-address-full-save', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-1/AATF-Returns/operator-address-postcode-save', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC008-Operator-Details')
})

router.post('/version1-1/AATF-Returns/submit-scheme-for-approval', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC015-Check-your-AATF-return')
})

router.post('/version1-1/AATF-Returns/submit-aatf-return', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC016-Submission-complete')
})

router.post('/version1-1/AATF-Returns/facility-address-postcode-save', function (req, res) {
    res.redirect('/version1-1/AATF-Returns/SC007-AATF-Tasklist')
})

//#endregion

//#region version 2 routes
router.get('/version1-2/AATF-Returns/SC005a-Select-Facility-Confirmation', function (req, res) {
    var facility = req.session.data['facilitySelect']
    if (facility == '') {
        req.session.data['facilitySelect'] = "Facility 3232"
    }
    res.render('version1-2/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.get('/version1-2/AATF-Returns/SC007-AATF-Tasklist', function (req, res) {
    res.render('version1-2/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-2/login-button', function (req, res) {
    res.redirect('/version1-2/SC002-Portal-Landing-Page')
})

router.post('/version1-2/AATF-Returns/save-and-continue', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC004-Are-you-reporting-on-any-non-obligated-weee')
})

router.post('/version1-2/AATF-Returns/save-and-continue-change', function (req, res) {
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
    
    res.redirect('/version1-2/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-2/AATF-Returns/non-obligated-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC004b-Are-you-reporting-on-any-DCF')
})

router.post('/version1-2/AATF-Returns/dcf-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC005-Select-Facility')
})

router.post('/version1-2/AATF-Returns/facility-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.post('/version1-2/AATF-Returns/facility-save-change', function (req, res) {
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

    res.redirect('/version1-2/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-2/AATF-Returns/facility-cancel', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC005-Select-Facility')
})

router.post('/version1-2/AATF-Returns/facility-confirm', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC006x-Do-you-want-to-report-on-multiple-pcs')
})

router.post('/version1-2/AATF-Returns/scheme-add', function (req, res) {
    req.session.data['WEEE-received-for-treatment-result'] = "0.000"
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = "0.000"
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = "0.000"
    res.redirect('/version1-2/AATF-Returns/SC006a-Scheme-confirmation')
})

router.post('/version1-2/AATF-Returns/scheme-confirm', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC009-WEEE-received-for-treatment')
})

router.post('/version1-2/AATF-Returns/weee-received-for-treatment-save', function (req, res) {
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
    res.redirect('/version1-2/AATF-Returns/SC016-Are-you-sending-any-whole-weee');
})

router.post('/version1-2/AATF-Returns/weee-reused-as-a-whole-appliance-save', function (req, res) {
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
    res.redirect('/version1-2/AATF-Returns/SC006-PCS-Summary')
})

router.post('/version1-2/AATF-Returns/Whole-WEEE-sent-to-another-treatment-save', function (req, res) {
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
    res.redirect('/version1-2/AATF-Returns/SC016c-ATF-treatment-table')
})

router.post('/version1-2/AATF-Returns/add-another-scheme', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC012-Would-you-like-to-add-another-scheme')
})

router.post('/version1-2/AATF-Returns/atf-treatment-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC008-Are-you-reusing-any-WEEE-as-a-whole-appliance')
})

router.post('/version1-2/AATF-Returns/reuse-treatment-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC006-PCS-Summary')
})

router.post('/version1-2/AATF-Returns/add-another-scheme-answer', function (req, res) {
    let answer = req.session.data['another-scheme']

    if (answer === 'false') {
        res.redirect('/version1-2/AATF-Returns/SC007-AATF-Tasklist')
    } else {
        res.redirect('/version1-2/AATF-Returns/SC006-Add-Scheme')
    }
})

router.post('/version1-2/AATF-Returns/whole-weee-answer', function (req, res) {
    let answer = req.session.data['whole-weee']

    if (answer === 'false') {
        res.redirect('/version1-2/AATF-Returns/SC008-Are-you-reusing-any-WEEE-as-a-whole-appliance')
    } else {
        res.redirect('/version1-2/AATF-Returns/SC008b-Operator-Address-Postcode-Locator')
    }
})

router.post('/version1-2/AATF-Returns/multiple-scheme-select-answer', function (req, res) {
    let answer = req.session.data['multiple-scheme-select']

    if (answer === 'false') {
        res.redirect('/version1-2/AATF-Returns/SC006-Add-Scheme')
    } else {
        res.redirect('/version1-2/AATF-Returns/SC006-Add-the-PCS-that-you-wish-to-report')
    }
})

router.post('/version1-2/AATF-Returns/multiple-pcs-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC006-PCS-Summary')
})

router.post('/version1-2/AATF-Returns/pcs-check-my-return', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC015-Check-your-AATF-return')
})

router.post('/version1-2/AATF-Returns/reusing-weee-answer', function (req, res) {
    let answer = req.session.data['reusing-weee']

    if (answer === 'false') {
        res.redirect('/version1-2/AATF-Returns/SC006-PCS-Summary')
    } else {
        res.redirect('/version1-2/AATF-Returns/SC010-WEEE-reused-as-a-whole-appliance')
    }
})

router.post('/version1-2/AATF-Returns/operator-details-answer', function (req, res) {
    let answer = req.session.data['operator-details']

    if (answer === 'false') {
        res.redirect('/version1-2/AATF-Returns/SC008c-Facility-Address-Locator')
    } else {
        res.redirect('/version1-2/AATF-Returns/SC007-AATF-Tasklist')
    }
})

router.post('/version1-2/AATF-Returns/non-obligated-weee-answer', function (req, res) {
    let answer = req.session.data['non-obligated-weee']

    if (answer === 'false') {
        res.redirect('/version1-2/AATF-Returns/SC004b-Are-you-reporting-on-any-DCF')
    } else {
        res.redirect('/version1-2/AATF-Returns/SC004a-Non-Obligated-WEEE')
    }
})

router.post('/version1-2/AATF-Returns/non-obligated-weee-DCF-answer', function (req, res) {
    let answer = req.session.data['non-obligated-weee-DCF']

    if (answer === 'false') {
        res.redirect('/version1-2/AATF-Returns/SC005-Select-Facility')
    } else {
        res.redirect('/version1-2/AATF-Returns/SC004c-DCF-Entry')
    }
})

router.post('/version1-2/AATF-Returns/operator-address-full-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-2/AATF-Returns/operator-address-postcode-save', function (req, res) {

    var pcsId = req.session.data['pcsId'];
    var pcs = req.session.data['pcs'];

    res.redirect('/version1-2/AATF-Returns/SC011-Whole-WEEE-sent-to-another-treatment?pcs=' + pcs + '&id=' + pcsId)
})

router.post('/version1-2/AATF-Returns/operator-address-postcode-save-2', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC010-WEEE-reused-as-a-whole-appliance')
})

router.post('/version1-2/AATF-Returns/submit-scheme-for-approval', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC015-Check-your-AATF-return')
})

router.post('/version1-2/AATF-Returns/multiple-pcs-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC006-PCS-Summary')
})

router.post('/version1-2/AATF-Returns/submit-aatf-return', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC016-Submission-complete')
})

router.post('/version1-2/AATF-Returns/facility-address-postcode-save', function (req, res) {
    res.redirect('/version1-2/AATF-Returns/SC007-AATF-Tasklist')
})

//#endregion

module.exports = router

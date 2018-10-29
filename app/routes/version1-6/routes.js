const router = require('express').Router();
const Address = require('../../data/address');
const Facility = require('../../data/facility');
const Period = require('../../data/period');
const Operator = require('../../data/operator');
const Categories = require('../../data/categories');
const Scheme = require('../../data/scheme');
const Schemes = require('../../data/schemes');


function CategoriesTotal(category) {
    var total = 0;
    if (category) {
        if (category._largeHouseholdAppliances) {
            total += parseInt(category._largeHouseholdAppliances);
        }
        if (category._smallHouseholdAppliances) {
            total += parseInt(category._smallHouseholdAppliances);
        }
        if (category._itAndTelecommunicationsEquipment) {
            total += parseInt(category._itAndTelecommunicationsEquipment);
        }
        if (category._consumerEquipment) {
            total += parseInt(category._consumerEquipment);
        }
        if (category._lightingEquipment) {
            total += parseInt(category._lightingEquipment);
        }
        if (category._electricalAndElectronicTools) {
            total += parseInt(category._electricalAndElectronicTools);
        }
        if (category._monitoringAndControlInstruments) {
            total += parseInt(category._monitoringAndControlInstruments);
        }
        if (category._toysLeisureAndSportsEquipment) {
            total += parseInt(category._toysLeisureAndSportsEquipment);
        }
        if (category._medicalDevices) {
            total += parseInt(category._medicalDevices);
        }
        if (category._automaticDispensers) {
            total += parseInt(category._automaticDispensers);
        }
        if (category._appliancesContainingRefrigerants) {
            total += parseInt(category._appliancesContainingRefrigerants);
        }
        if (category._gasDischargeLampsAndLedLightSources) {
            total += parseInt(category._gasDischargeLampsAndLedLightSources);
        }
        if (category._displayEquipment) {
            total += parseInt(category._displayEquipment);
        }
        if (category._photovoltaicPanel) {
            total += parseInt(category._photovoltaicPanel);
        }
        return total.toFixed(3);
    }
    else {
        return '-';
    }
}

function resetNonObligated(req) {
    req.session.data['large-household-appliances-input-SC004'] = '';
    req.session.data['small-household-appliances-input-SC004'] = '';
    req.session.data['it-and-telecomms-input-SC004'] = '';
    req.session.data['consumer-equipment-input-SC004'] = '';
    req.session.data['lighting-equipment-input-SC004'] = '';
    req.session.data['electrical-and-electronic-input-SC004'] = '';
    req.session.data['toys-leisure-sports-input-SC004'] = '';
    req.session.data['medical-devices-input-SC004'] = '';
    req.session.data['monitoring-control-input-SC004'] = '';
    req.session.data['automatic-dispensers-input-SC004'] = '';
    req.session.data['display-equipment-input-SC004'] = '';
    req.session.data['cooling-appliance-input-SC004'] = '';
    req.session.data['gas-discharge-led-input-SC004'] = '';
    req.session.data['photovolatic-panels-input-SC004'] = '';

    req.session.data['large-household-appliances-input-SC004c-DCF'] = '';
    req.session.data['small-household-appliances-input-SC004c-DCF'] = '';
    req.session.data['it-and-telecomms-input-SC004c-DCF'] = '';
    req.session.data['consumer-equipment-input-SC004c-DCF'] = '';
    req.session.data['lighting-equipment-input-SC004c-DCF'] = '';
    req.session.data['electrical-and-electronic-input-SC004c-DCF'] = '';
    req.session.data['toys-leisure-sports-input-SC004c-DCF'] = '';
    req.session.data['medical-devices-input-SC004c-DCF'] = '';
    req.session.data['monitoring-control-input-SC004c-DCF'] = '';
    req.session.data['automatic-dispensers-input-SC004c-DCF'] = '';
    req.session.data['display-equipment-input-SC004c-DCF'] = '';
    req.session.data['cooling-appliance-input-SC004c-DCF'] = '';
    req.session.data['gas-discharge-led-input-SC004c-DCF'] = '';
    req.session.data['photovolatic-panels-input-SC004c-DCF'] = '';
}

router.post('/version1-6/AATF-Returns/paste-values-save', function (req, res) {
    req.session.data['paste-values'] = req.session.data['paste-text-area'];
    res.redirect(req.session.data['paste-return-page']);// + req.session.data['paste-return-page']);
});

router.post('/version1-6/AATF-Returns/paste-values-cancel', function (req, res) {
    res.render('version1-6/AATF-Returns/' + req.session.data['paste-return-page']);
});

router.get('/version1-6/AATF-Returns/paste-values-redirect', function (req, res) {
    req.session.data['paste-values'] = '';
    req.session.data['paste-page-title'] = req.query['title'];
    req.session.data['paste-return-page'] = req.query['returnUrl'];

    res.render('version1-6/AATF-Returns/paste-values-screen');
});

router.post('/version1-6/AATF-Returns/find-scheme', function (req, res) {
    var searchTerm = req.session.data['SearchTerm'];
    var schemes = req.session.data['schemes'];

    var results = schemes._schemes.filter(function (scheme) {
        if (scheme._name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            return true;
        }
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ results: results }));
});

router.get('/paste', function (req, res) {
    res.render('version1-6/transform-paste');
});

router.get('/version1-6/complete', function (req, res) {

    var schemes = req.session.data['schemes'];

    res.render('version1-6/auto-complete');
})

router.get('/version1-6/AATF-Returns/My-facilities', function (req, res) {

    var period = req.session.data['period'];

    period._operator._wee = CategoriesTotal(period._operator._categories);
    period._operator._weeDcf = CategoriesTotal(period._operator._categoriesDcf);
    console.log(period._operator._wee);
    if(period._operator._wee == '-') {
        period._operator._wee = 'NIL';
    }
    if(period._operator._weeDcf == '-') {
        period._operator._weeDcf = 'NIL';
    }
    req.session.data['period'] = period;

    //res.render('version1-6/AATF-Returns/SC002_1-My-facilities');
    res.render('version1-6/AATF-Returns/SC002_1-My-facilities-3');
})

router.get('/version1-6/AATF-Returns/compliance-reporting', function (req, res) {

    res.render('version1-6/AATF-Returns/SC002_2-compliance-and-reporting');
})

router.get('/version1-6/AATF-Returns/WEEE-received-for-treatment', function (req, res) {
    var schemeId = req.query['schemeId'];
    var schemes = req.session.data['schemes'];
    console.log('SCHEME');
    var selectedScheme = schemes._schemes.filter(function (scheme) {
        if (scheme._id === schemeId) {
            return true;
        }
    });
    console.log(selectedScheme[0]);
    req.session.data['selectedScheme'] = selectedScheme[0];

    res.redirect('SC009-Enter-WEEE-that-has-been-received-for-treatment');
})


router.get('/version1-6/AATF-Returns/Are-you-sending-any-WEEE-to-another-ATF-for-treatment', function (req, res) {
    var schemeId = req.query['schemeId'];
    var schemes = req.session.data['schemes'];

    var selectedScheme = schemes._schemes.filter(function (scheme) {
        if (scheme._id === schemeId) {
            return true;
        }
    });

    req.session.data['selectedScheme'] = selectedScheme[0];

    res.render('version1-6/AATF-Returns/SC016-Are-you-sending-any-WEEE-to-another-ATF-for-treatment');
})

router.get('/version1-6/AATF-Returns/SC004-Would-you-like-to-report-on-any-non-obligated-weee', function (req, res) {
    res.render('version1-6/AATF-Returns/SC004-Would-you-like-to-report-on-any-non-obligated-weee')
})

router.get('/version1-6/AATF-Returns/aatf-option-select', function (req, res) {


    if (req.session.data['aatf-return-option'] === 'aatfReturn') {
        res.redirect('/version1-6/AATF-Returns/PCS-Table');
    }
    if (req.session.data['aatf-return-option'] === 'aatfNilReturn') {

        let period = req.session.data['period'];

        var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
            if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
                return true;
            }
        });

        selectedFacility[0]._hasEnteredData = false;

        res.redirect('/version1-6/AATF-Returns/SC013_1-Confirmation-of-nil-return');
    }
    if (req.session.data['aatf-return-option'] === 'aatfUpload') {
        res.redirect('/version1-6/AATF-Returns/SC014_1-Upload-an-aatf-return-browse');
    }
})

router.post('/version1-6/login-button', function (req, res) {
    var scheme = new Schemes();
    var period = new Period("2018");

    period._operator._categories = new Categories('0','0','0','0','0','0','0','0','0','0','0','0','0','0');
    resetNonObligated(req);

    req.session.data['schemes'] = scheme;
    req.session.data['period'] = period;
    req.session.data['paste-values'] = '';
    res.redirect('/version1-6/SC002-What-would-you-like-to-do')
})

router.post('/version1-6/AATF-Returns/save-and-continue', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC004-Are-you-reporting-on-any-non-obligated-weee')
})

router.get('/version1-6/AATF-Returns/Make-an-AATF-return-options', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-6/AATF-Returns/SC002_1a-Make-an-AATF-return-options');
})

router.get('/version1-6/AATF-Returns/Report-options', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-6/AATF-Returns/SC002_1d-How-would-you-like-to-report');
})

router.post('/version1-6/AATF-Returns/save-and-continue-change', function (req, res) {
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

    res.redirect('/version1-6/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-6/AATF-Returns/non-obligated-save', function (req, res) {

    var period = req.session.data['period'];

    period._operator._categories = new Categories(req.session.data['large-household-appliances-input-SC004'],
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

    req.session.data['paste-values'] = '';
    req.session.data['period'] = period;

    console.log('1: ' + period._operator._categories);
    console.log('2: ' + period._operator._categories._largeHouseholdAppliances);

    res.redirect('/version1-6/AATF-Returns/SC004_2-Are-you-reporting-on-any-non-obligated-weee-as-retained-by-a-dcf')
})

router.post('/version1-6/AATF-Returns/dcf-save', function (req, res) {

    var period = req.session.data['period'];

    period._operator._categoriesDcf = new Categories(req.session.data['large-household-appliances-input-SC004c-DCF'],
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

    req.session.data['paste-values'] = '';
    req.session.data['period'] = period;

    res.redirect('/version1-6/AATF-Returns/My-facilities');
})

router.post('/version1-6/AATF-Returns/facility-save', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.post('/version1-6/AATF-Returns/facility-save-change', function (req, res) {
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

    res.redirect('/version1-6/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-6/AATF-Returns/facility-cancel', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC005-Select-Facility')
})

router.post('/version1-6/AATF-Returns/facility-confirm', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC006x-Do-you-want-to-report-on-multiple-pcs')
})

router.post('/version1-6/AATF-Returns/scheme-add', function (req, res) {
    req.session.data['WEEE-received-for-treatment-result'] = "0.000"
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = "0.000"
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = "0.000"
    res.redirect('/version1-6/AATF-Returns/SC006_1a-Is-this-the-correct-PCS-that-you-wish-to-report-on')
})

router.get('/version1-6/AATF-Returns/PCS-Table', function (req, res) {

    res.redirect('/version1-6/AATF-Returns/SC007-PCS-Table')
})

router.post('/version1-6/AATF-Returns/scheme-confirm', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/PCS-Table')
})


router.post('/version1-6/AATF-Returns/scheme-cancel', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/PCS-Table')
})

router.get('/version1-6/AATF-Returns/PCS-Table', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/PCS-Table');
})

router.post('/version1-6/AATF-Returns/add-pcs', function (req, res) {
    var period = req.session.data['period'];

    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    var selectedScheme = req.session.data.schemes._schemes.filter(function (scheme) {
        if (scheme._id === req.session.data['scheme-name-id']) {
            return true;
        }
    });

    updateFacility[0]._pcs.push(selectedScheme[0]);
    req.session.data['selectedFacility'] = updateFacility[0];
    req.session.data['period'] = period;

    res.redirect('/version1-6/AATF-Returns/SC007-PCS-Table')
})

router.post('/version1-6/AATF-Returns/weee-received-for-treatment-save', function (req, res) {
    var period = req.session.data['period'];
    console.log('Select Facility');
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });
    console.log('Update Facility');
    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });
    console.log('Scheme');
    var updateScheme = updateFacility[0]._pcs.filter(function (scheme) {
        if (scheme._id === req.session.data['selectedScheme']._id) {
            return true;
        }
    });
    console.log('Selection done');
    
    updateScheme[0]._hasEnteredData = true;
    //console.log(updateScheme[0]);
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
    
    updateScheme[0]._weeeReceived = new Categories(req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']);
    updateScheme[0]._weeeReceivedb2b = new Categories(req.session.data['large-household-appliances-input-SC009-b2b'], req.session.data['small-household-appliances-input-SC009-b2b'], req.session.data['it-and-telecomms-input-SC009-b2b'], req.session.data['consumer-equipment-input-SC009-b2b'], req.session.data['lighting-equipment-input-SC009-b2b'], req.session.data['electrical-and-electronic-input-SC009-b2b'], req.session.data['toys-leisure-sports-input-SC009-b2b'], req.session.data['medical-devices-input-SC009-b2b'], req.session.data['monitoring-control-input-SC009-b2b'], req.session.data['automatic-dispensers-input-SC009-b2b'], req.session.data['display-equipment-input-SC009-b2b'], req.session.data['cooling-appliance-input-SC009-b2b'], req.session.data['gas-discharge-led-input-SC009-b2b'], req.session.data['photovolatic-panels-input-SC009-b2b']);
    req.session.data['selectedScheme'] = updateScheme[0];
    req.session.data['paste-values'] = '';
    req.session.data['period'] = period;
    //console.log(period);
    //console.log("Scheme: " + req.session.data['selectedScheme']._weeeReceived._largeHouseholdAppliances);

    res.redirect('/version1-6/AATF-Returns/SC016-Are-you-sending-any-WEEE-to-another-ATF-for-treatment');
})

router.post('/version1-6/AATF-Returns/weee-reused-as-a-whole-appliance-save', function (req, res) {
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
    res.redirect('/version1-6/AATF-Returns/SC016-Reuse-Table')
})

router.post('/version1-6/AATF-Returns/weee-reused-as-a-whole-appliance-this-facility-save', function (req, res) {

    var period = req.session.data.period;
    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    var updateScheme = updateFacility[0]._pcs.filter(function (scheme) {
        if (scheme._id === req.session.data['selectedScheme']._id) {
            return true;
        }
    });

    updateScheme[0]._weeeReusedb2c = new Categories(req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']);
    updateScheme[0]._weeeReusedb2b = new Categories(req.session.data['large-household-appliances-input-SC010-b2b'], req.session.data['small-household-appliances-input-SC010-b2b'], req.session.data['it-and-telecomms-input-SC010-b2b'], req.session.data['consumer-equipment-input-SC010-b2b'], req.session.data['lighting-equipment-input-SC010-b2b'], req.session.data['electrical-and-electronic-input-SC010-b2b'], req.session.data['toys-leisure-sports-input-SC010-b2b'], req.session.data['medical-devices-input-SC010-b2b'], req.session.data['monitoring-control-input-SC010-b2b'], req.session.data['automatic-dispensers-input-SC010-b2b'], req.session.data['display-equipment-input-SC010-b2b'], req.session.data['cooling-appliance-input-SC010-b2b'], req.session.data['gas-discharge-led-input-SC010-b2b'], req.session.data['photovolatic-panels-input-SC010-b2b']);
    req.session.data['paste-values'] = '';

    res.redirect('/version1-6/AATF-Returns/SC008_3-Is-this-whole-weee-being-sent-to-another-site')
})

router.post('/version1-6/AATF-Returns/Whole-WEEE-sent-to-another-treatment-save', function (req, res) {
    var period = req.session.data['period'];
    var selectedSentOnId = req.session.data['selectedSentOnForTreatmentId'];

    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });
    var updateScheme = updateFacility[0]._pcs.filter(function (scheme) {
        if (scheme._id === req.session.data["selectedScheme"]._id) {
            return true;
        }
    });

    var sentOnUpdate = updateScheme[0]._sentOnOperatorCollection.filter(function (sentOn) {
        if (sentOn._id === selectedSentOnId) {
            return true;
        }
    });

    sentOnUpdate[0]._sentToAnotherAtfForTreatmentb2c = new Categories(req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']);
    sentOnUpdate[0]._sentToAnotherAtfForTreatmentb2b = new Categories(req.session.data['large-household-appliances-input-SC011-b2b'], req.session.data['small-household-appliances-input-SC011-b2b'], req.session.data['it-and-telecomms-input-SC011-b2b'], req.session.data['consumer-equipment-input-SC011-b2b'], req.session.data['lighting-equipment-input-SC011-b2b'], req.session.data['electrical-and-electronic-input-SC011-b2b'], req.session.data['toys-leisure-sports-input-SC011-b2b'], req.session.data['medical-devices-input-SC011-b2b'], req.session.data['monitoring-control-input-SC011-b2b'], req.session.data['automatic-dispensers-input-SC011-b2b'], req.session.data['display-equipment-input-SC011-b2b'], req.session.data['cooling-appliance-input-SC011-b2b'], req.session.data['gas-discharge-led-input-SC011-b2b'], req.session.data['photovolatic-panels-input-SC011-b2b']);
    sentOnUpdate[0]._Id = selectedSentOnId;
    var items = [req.session.data['large-household-appliances-input-SC011'], req.session.data['small-household-appliances-input-SC011'], req.session.data['it-and-telecomms-input-SC011'], req.session.data['consumer-equipment-input-SC011'], req.session.data['lighting-equipment-input-SC011'], req.session.data['electrical-and-electronic-input-SC011'], req.session.data['toys-leisure-sports-input-SC011'], req.session.data['medical-devices-input-SC011'], req.session.data['monitoring-control-input-SC011'], req.session.data['automatic-dispensers-input-SC011'], req.session.data['display-equipment-input-SC011'], req.session.data['cooling-appliance-input-SC011'], req.session.data['gas-discharge-led-input-SC011'], req.session.data['photovolatic-panels-input-SC011']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC011-b2b'], req.session.data['small-household-appliances-input-SC011-b2b'], req.session.data['it-and-telecomms-input-SC011-b2b'], req.session.data['consumer-equipment-input-SC011-b2b'], req.session.data['lighting-equipment-input-SC011-b2b'], req.session.data['electrical-and-electronic-input-SC011-b2b'], req.session.data['toys-leisure-sports-input-SC011-b2b'], req.session.data['medical-devices-input-SC011-b2b'], req.session.data['monitoring-control-input-SC011-b2b'], req.session.data['automatic-dispensers-input-SC011-b2b'], req.session.data['display-equipment-input-SC011-b2b'], req.session.data['cooling-appliance-input-SC011-b2b'], req.session.data['gas-discharge-led-input-SC011-b2b'], req.session.data['photovolatic-panels-input-SC011-b2b']]
    var result = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        result += Number(itemsb2b[i])
    }
    sentOnUpdate[0]._sentToResult = result.toFixed(3);
    req.session.data['period'] = period;
    req.session.data['selectedScheme'] = updateScheme[0];
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)
    req.session.data['paste-values'] = '';

    res.redirect('/version1-6/AATF-Returns/SC016_1-Add-a-table-here-for-the-ATF-treatment')
})

router.get('/version1-6/AATF-Returns/Sent-On-ATF', function (req, res) {
    req.session.data['sentOnWorking'] = req.query['id'];

    res.render('version1-6/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment');
})

router.post('/version1-6/AATF-Returns/add-another-scheme', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC012-Would-you-like-to-add-another-scheme')
})

router.post('/version1-6/AATF-Returns/atf-treatment-save', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC008-Do-you-need-to-report-any-WEEE-reused-as-a-whole-appliance')
})

router.post('/version1-6/AATF-Returns/reuse-treatment-save', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC017-What-do-you-want-to-do-now')
})

router.post('/version1-6/AATF-Returns/upload-an-aatf-successful', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC002_1-My-facilities')
})

router.post('/version1-6/AATF-Returns/upload-an-aatf-failed', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC014_1-Upload-an-aatf-return-browse')
})

router.post('/version1-6/AATF-Returns/upload-an-aatf-return-is-this-correct', function (req, res) {
    var fileName = req.session.data['file-upload-1'];
    var confirmation = req.session.data['aatf-return-confirm-option'];
    if (confirmation == '1') {

        res.redirect('/version1-6/AATF-Returns/SC014_4-File-upload-failed');

    } else if (confirmation == '2') {
        res.redirect('/version1-6/AATF-Returns/SC014_1-Upload-an-aatf-return-browse')
    }
})

router.post('/version1-6/AATF-Returns/upload-an-aatf-return-select', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC014_2-Is-this-file-correct')
})

router.post('/version1-6/AATF-Returns/upload-an-aatf-return', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC014_1-Upload-an-aatf-return-browse')
})

router.post('/version1-6/AATF-Returns/add-another-scheme-answer', function (req, res) {
    let answer = req.session.data['another-scheme']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC007-AATF-Tasklist')
    } else {
        res.redirect('/version1-6/AATF-Returns/SC006-Add-Scheme')
    }
})

router.post('/version1-6/AATF-Returns/whole-weee-answer', function (req, res) {
    let answer = req.session.data['whole-weee']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC008-Do-you-need-to-report-any-WEEE-reused-as-a-whole-appliance?facilityId=' + req.session.data.facilityId)
    } else {
        res.redirect('/version1-6/AATF-Returns/SC016_2-Which-operator-is-this-WEEE-being-sent-to-for-treatment?facility=' + req.session.data.facilityId + '&facilityId=' + req.session.data.facilityId + '&scheme=' + req.session.data.scheme + '&schemeId=' + req.session.data.schemeId)
    }
})



router.post('/version1-6/AATF-Returns/what-to-do-select', function (req, res) {
    let answer = req.session.data['what-to-do-option']

    if (answer === '1') {
        res.redirect('/version1-6/AATF-Returns/SC015-Check-your-AATF-return-v2')
    } else if (answer === '2') {
        res.redirect('/version1-6/AATF-Returns/PCS-Table')
    } else if (answer === '3') {
        res.redirect('/version1-6/AATF-Returns/My-facilities')
    }
})

router.post('/version1-6/AATF-Returns/multiple-scheme-select-answer', function (req, res) {
    let answer = req.session.data['multiple-scheme-select']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC006-Add-Scheme')
    } else {
        res.redirect('/version1-6/AATF-Returns/SC006-Add-the-PCS-that-you-wish-to-report')
    }
})

router.post('/version1-6/AATF-Returns/multiple-pcs-save', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/PCS-Table')
})

router.post('/version1-6/AATF-Returns/pcs-check-my-return', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC015-Check-your-AATF-return-v2')
})

router.post('/version1-6/AATF-Returns/reusing-weee-answer', function (req, res) {
    let answer = req.session.data['reusing-weee']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC017-What-do-you-want-to-do-now')
    } else {
        res.redirect('/version1-6/AATF-Returns/SC008_2-Enter-WEEE-that-has-been-reused-as-a-whole-appliance')

        //res.redirect('/version1-6/AATF-Returns/SC008_1-Is-this-whole-weee-being-reused-at-this-facility')
    }
})

router.post('/version1-6/AATF-Returns/reusing-weee-at-this-facility-answer', function (req, res) {
    let answer = req.session.data['reusing-weee-at-this-facility']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC008_3-Is-this-whole-weee-being-sent-to-another-site')
    } else {
        res.redirect('/version1-6/AATF-Returns/SC010-WEEE-reused-as-a-whole-appliance-this-facility')
    }
})

router.post('/version1-6/AATF-Returns/reusing-weee-sent-to-another-site-answer', function (req, res) {
    let answer = req.session.data['reusing-weee-sent-to-another-site']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC017-What-do-you-want-to-do-now')
    } else {
        res.redirect('/version1-6/AATF-Returns/SC008_5-Which-site-is-this-WEEE-being-sent-to-for-reuse-as-a-whole-appliance')
    }
})

router.post('/version1-6/AATF-Returns/operator-details-answer', function (req, res) {
    let answer = req.session.data['operator-details']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC008c-Facility-Address-Locator')
    } else {
        res.redirect('/version1-6/AATF-Returns/SC007-AATF-Tasklist')
    }
})

router.post('/version1-6/AATF-Returns/atf-same-as-operator-answer', function (req, res) {
    let answer = req.session.data['atf-same-as-operator']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/SC016_2b-Provide-the-address-of-the-ATF')
    } else {

        var operator = req.session.data["selectedOperator"];
        var period = req.session.data['period'];

        var selectedScheme = GetSelectedScheme(period, req.session.data["selectedFacility"]._id, req.session.data["selectedScheme"]._id);
        var selectedAtf = selectedScheme._sentOnOperatorCollection.filter(function (senton) {
            if (parseInt(senton._id) === parseInt(req.session.data['selectedSentOnForTreatmentId'])) {
                return true;
            }
        });

        var newOperator = new Operator(operator._name, 0, '', operator._address._street, operator._address._town, operator._address._country, operator._address._postcode);
        selectedAtf[0]._atfAddress = newOperator;

        req.session.data['period'] = period;
        res.redirect('/version1-6/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment')
    }
})

router.post('/version1-6/AATF-Returns/non-obligated-weee-answer', function (req, res) {

    let answer = req.session.data['non-obligated-weee']
    let period = req.session.data['period'];

    if (answer === 'false') {
        
        if (period._operator._categories) {
            period._operator._categories = null;
            period._operator._categoriesDcf = null;
        }
        res.redirect('/version1-6/AATF-Returns/My-facilities')
    } else {
        if (period._operator._categories == null) {
            console.log('Value is undefined');
        } else {
            console.log('TEST: ' + period._operator._categories._largeHouseholdAppliances);
        }
        res.redirect('/version1-6/AATF-Returns/SC004_1-Enter-non-obligated-WEEE')
    }
})

router.post('/version1-6/AATF-Returns/non-obligated-weee-DCF-answer', function (req, res) {
    let answer = req.session.data['non-obligated-weee-DCF']

    if (answer === 'false') {
        res.redirect('/version1-6/AATF-Returns/My-facilities')
    } else {
        res.redirect('/version1-6/AATF-Returns/SC004_2a-Add-any-DCF-data')
    }
})

router.post('/version1-6/AATF-Returns/operator-address-full-save', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC007-AATF-Tasklist')
})

function Selectedfacility(req, id) {
    var period = req.session.data['period'];
    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(id)) {
            return true;
        }
    });

    return updateFacility[0];
}

function GetSelectedScheme(period, facilityId, schemeId) {
    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(facilityId)) {
            return true;
        }
    });

    var selectedScheme = updateFacility[0]._pcs.filter(function (scheme) {
        if (scheme._id === schemeId) {
            return true;
        }
    });

    return selectedScheme[0];
}

router.post('/version1-6/AATF-Returns/operator-address-postcode-save', function (req, res) {
    var period = req.session.data['period'];
    var selectedScheme = GetSelectedScheme(period, req.session.data["selectedFacility"]._id, req.session.data["selectedScheme"]._id);

    if (!selectedScheme._sentOnOperatorCollection) {
        selectedScheme._sentOnOperatorCollection = [];
    }

    var operatorName;
    var operatorPostcode;
    if (req.session.data['operator-name'] !== '') {
        operatorName = req.session.data['operator-name'];
    }
    else {
        operatorName = req.session.data['operator-name-search'];
    }
    if (req.session.data['operator-postcode'] !== '') {
        operatorPostcode = req.session.data['operator-postcode'];
    }
    else {
        operatorPostcode = req.session.data['operator-postcode-search'];
    }

    var newOperator = new Operator(operatorName, selectedScheme._sentOnOperatorCollection.length, '', req.session.data['operator-building-street'], req.session.data['operator-town-city'], req.session.data['operator-county'], operatorPostcode);
    selectedScheme._sentOnOperatorCollection.push(newOperator);

    req.session.data['selectedScheme'] = selectedScheme;
    req.session.data['period'] = period;
    req.session.data['selectedOperator'] = newOperator;
    req.session.data['selectedSentOnForTreatmentId'] = selectedScheme._sentOnOperatorCollection.length - 1;

    res.redirect('/version1-6/AATF-Returns/SC016_2a-Is-the-atf-address-the-same-as-the-facility')
})

router.post('/version1-6/AATF-Returns/operator-address-postcode-atf-save', function (req, res) {
    var period = req.session.data['period'];
    var selectedScheme = GetSelectedScheme(period, req.session.data["selectedFacility"]._id, req.session.data["selectedScheme"]._id);


    var operatorName;
    var operatorPostcode;
    if (req.session.data['operator-name'] !== '') {
        operatorName = req.session.data['operator-name'];
    }
    else {
        operatorName = req.session.data['operator-name-search'];
    }
    if (req.session.data['operator-postcode'] !== '') {
        operatorPostcode = req.session.data['operator-postcode'];
    }
    else {
        operatorPostcode = req.session.data['operator-postcode-search'];
    }

    var selectedAtf = selectedScheme._sentOnOperatorCollection.filter(function (senton) {
        if (parseInt(senton._id) === parseInt(req.session.data['selectedSentOnForTreatmentId'])) {
            return true;
        }
    });

    var newOperator = new Operator(operatorName, selectedScheme._sentOnOperatorCollection.length, '', req.session.data['operator-building-street'], req.session.data['operator-town-city'], req.session.data['operator-county'], operatorPostcode);
    selectedAtf[0]._atfAddress = newOperator;

    req.session.data['period'] = period;

    res.redirect('/version1-6/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment')
})

router.post('/version1-6/AATF-Returns/operator-address-postcode-save-2', function (req, res) {
    var period = req.session.data['period'];
    var siteName = req.session.data['operator-name-search-2'];
    var sitePostcode = req.session.data['operator-postcode-search-2'];
    var siteAddress = req.session.data['site-address'];
    var siteArray = [];

    siteArray = [siteName, sitePostcode];


    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    updateFacility[0]._reusedSites.push(siteArray);

    req.session.data['selectedFacility'] = updateFacility[0];
    req.session.data['period'] = period;

    res.redirect('/version1-6/AATF-Returns/SC008_7-Enter-name-and-address-of-all-sites')
})

router.post('/version1-6/AATF-Returns/submit-scheme-for-approval', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC015-Check-your-AATF-return-v2')
})

router.post('/version1-6/AATF-Returns/submit-aatf-return', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC016-Submission-complete')
})

router.post('/version1-6/AATF-Returns/facility-address-postcode-save', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-6/AATF-Returns/nil-return-confirm', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/My-facilities')
})

router.post('/version1-6/AATF-Returns/compliance-reporting-continue', function (req, res) {

    var period = '';
    var year = '';

    if (!req.session.data['compliance-year']) {
        year = '2018';
    } else {
        year = req.session.data['compliance-year'];
    }
    if (!req.session.data['reporting-period']) {
        period = 'Q1';
    } else {
        period = req.session.data['reporting-period'];
    }

    var longPeriod = '';
    if (period === 'Q1') {
        longPeriod = 'Q1 Jan - Mar';
    }
    if (period === 'Q2') {
        longPeriod = 'Q2 Apr - Jun';
    }
    if (period === 'Q3') {
        longPeriod = 'Q3 Jul - Sep';
    }
    if (period === 'Q4') {
        longPeriod = 'Q4 Oct - Dec';
    }
    req.session.data['return-year'] = year;
    req.session.data['return-period'] = period;
    req.session.data['return-period-long'] = longPeriod;

    res.redirect('/version1-6/AATF-Returns/SC002_1c-Start-report');
})

router.post('/version1-6/AATF-Returns/compliance-reporting-start', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC002_1d-How-would-you-like-to-report')
})

router.post('/version1-6/AATF-Returns/compliance-reporting-end', function (req, res) {
    let answer = req.session.data['compliance-reporting-option']

    if (answer === '1') {
        res.redirect('/version1-6/AATF-Returns/SC007-PCS-Table')
    } else if (answer === '2') {
        res.redirect('/version1-6/AATF-Returns/SC014_1-Upload-an-aatf-return-browse')
    } else if (answer === '3') {
        res.redirect('/version1-6/AATF-Returns/SC013_1-Confirmation-of-nil-return')
    }
})

router.post('/version1-6/start-options-select', function (req, res) {
    let answer = req.session.data['start-options']

    if (answer === '1') {
        res.redirect('/version1-6/AATF-Returns/SC002_2-compliance-and-reporting')
    }
})

router.get('/version1-6/AATF-Returns/Enter-WEEE-that-has-been-received-for-treatment', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-6/AATF-Returns/SC009-Enter-WEEE-that-has-been-received-for-treatment');
})

router.get('/version1-6/AATF-Returns/PCS-Table', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-6/AATF-Returns/SC007-PCS-Table?');
})

router.get('/version1-6/AATF-Returns/Are-you-sending-any-WEEE-to-another-ATF-for-treatment', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-6/AATF-Returns/SC016-Are-you-sending-any-WEEE-to-another-ATF-for-treatment');
})

router.get('/version1-6/AATF-Returns/Do-you-need-to-report-any-WEEE-reused-as-a-whole-appliance', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-6/AATF-Returns/SC008-Do-you-need-to-report-any-WEEE-reused-as-a-whole-appliance');
})

router.get('/version1-6/AATF-Returns/PCS-selection', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-6/AATF-Returns/SC007_1-PCS-selection');
})

router.post('/version1-6/AATF-Returns/pcs-selection-form-save', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/SC009-Enter-WEEE-that-has-been-received-for-treatment');
})

router.post('/version1-6/AATF-Returns/pcs-selection-form-cancel', function (req, res) {
    res.redirect('/version1-6/AATF-Returns/My-facilities');
})

module.exports = router;
const router = require('express').Router();
const Address = require('../../data/address');
const Facility = require('../../data/facility');
const Period = require('../../data/period');
const Operator = require('../../data/operator');
const Categories = require('../../data/categories');
const Scheme = require('../../data/scheme');
const Schemes = require('../../data/schemes');

function FormatTotal(number){
    if (number){
        return parseFloat(number).toFixed(3);
    }

    return '-';
}

function CategoriesTotal(category) {
    if (category !== 'undefined' && category) {
        var total = 0;
        if (category._largeHouseholdAppliances) {
            total += parseFloat(category._largeHouseholdAppliances);
        }
        if (category._smallHouseholdAppliances) {
            total += parseFloat(category._smallHouseholdAppliances);
        }
        if (category._itAndTelecommunicationsEquipment) {
            total += parseFloat(category._itAndTelecommunicationsEquipment);
        }
        if (category._consumerEquipment) {
            total += parseFloat(category._consumerEquipment);
        }
        if (category._lightingEquipment) {
            total += parseFloat(category._lightingEquipment);
        }
        if (category._electricalAndElectronicTools) {
            total += parseFloat(category._electricalAndElectronicTools);
        }
        if (category._monitoringAndControlInstruments) {
            total += parseFloat(category._monitoringAndControlInstruments);
        }
        if (category._toysLeisureAndSportsEquipment) {
            total += parseFloat(category._toysLeisureAndSportsEquipment);
        }
        if (category._medicalDevices) {
            total += parseFloat(category._medicalDevices);
        }
        if (category._automaticDispensers) {
            total += parseFloat(category._automaticDispensers);
        }
        if (category._appliancesContainingRefrigerants) {
            total += parseFloat(category._appliancesContainingRefrigerants);
        }
        if (category._gasDischargeLampsAndLedLightSources) {
            total += parseFloat(category._gasDischargeLampsAndLedLightSources);
        }
        if (category._displayEquipment) {
            total += parseFloat(category._displayEquipment);
        }
        if (category._photovoltaicPanel) {
            total += parseFloat(category._photovoltaicPanel);
        }
        return total;
    }

    return 0;
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

function SetupData(req){
    var scheme = new Schemes();
    var period = new Period("2018");

    //period._operator._categories = new Categories('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
    resetNonObligated(req);

    req.session.data['schemes'] = scheme;
    req.session.data['period'] = period;
    req.session.data['paste-values'] = '';
}


router.get('/version1-8/feedback', function (req, res){
    res.render('version1-8/feedback');
});

router.post('/version1-8/AATF-Returns/paste-values-save', function (req, res) {
    req.session.data['paste-values'] = req.session.data['paste-text-area'];
    res.redirect(req.session.data['paste-return-page']);// + req.session.data['paste-return-page']);
});

router.post('/version1-8/AATF-Returns/paste-values-cancel', function (req, res) {
    res.render('version1-8/AATF-Returns/' + req.session.data['paste-return-page']);
});

router.get('/version1-8/AATF-Returns/paste-values-redirect', function (req, res) {
    req.session.data['paste-values'] = '';
    req.session.data['paste-page-title'] = req.query['title'];
    req.session.data['paste-return-page'] = req.query['returnUrl'];

    res.render('version1-8/AATF-Returns/paste-values-screen');
});

router.get('/version1-8/Upload-Returns/paste-values-redirect', function (req, res) {
    req.session.data['paste-values'] = '';
    req.session.data['paste-page-title'] = req.query['title'];
    req.session.data['paste-return-page'] = req.query['returnUrl'];

    res.render('version1-8/Upload-Returns/paste-values-screen');
});

router.get('/version1-8/AATF-Returns/select-your-pcs', function (req, res) {
    res.render('version1-8/AATF-Returns/SC019-select-your-pcs');
});

router.post('/version1-8/AATF-Returns/select-your-pcs', function (req, res) {
    
    var period = req.session.data['period'];
    var pcs = req.session.data['pcs-selection-check'];
    var pcsName = [];
    var pcsIDs = [];
    for (var i = 0; i < pcs.length; i++) {
        var str = pcs[i].split('#');
        pcsName.push(str[0]);
        pcsIDs.push(str[1]);
    }

    if (period._operator._selectedSchemes == undefined) {
        period._operator._selectedSchemes = [];
        for (var i = 0; i < pcsName.length; i++) {
            period._operator._selectedSchemes.push(new Scheme(pcsName[i], pcsIDs[i]));
        }
    } else {
        for (var i = 0; i < pcsName.length; i++) {
            var schemeFound = false;
            for (var j = 0; j < period._operator._selectedSchemes.length; j++) {
                if (pcsName[i] == period._operator._selectedSchemes[j]._name) {
                    schemeFound = true;
                }
            }
            if (!schemeFound) {
                period._operator._selectedSchemes.push(new Scheme(pcsName[i], pcsIDs[i]));
            }
        }

        for (var i = 0; i < period._operator._selectedSchemes.length; i++) {
            var schemeFound = false;
            for (var j = 0; j < pcsName.length; j++) {
                if (period._operator._selectedSchemes[i]._name == pcsName[j]) {
                    schemeFound = true;
                }
            }
            if (!schemeFound) {
                period._operator._selectedSchemes.splice(i, 1);
            }
        }
    }
    
    for (var i = 0; i < period._facilities.length; i++){
        period._facilities[i]._pcs = [];
        for (var selectedSchemeCount = 0; selectedSchemeCount < period._operator._selectedSchemes.length; selectedSchemeCount ++) {
            period._facilities[i]._pcs.push(period._operator._selectedSchemes[selectedSchemeCount]);
        }
    }
    
    req.session.data['period'] = period;

    res.redirect('/version1-8/AATF-Returns/My-facilities');
});

router.get('/version1-8/AATF-Returns/What-do-you-need-to-report-on', function (req, res) {

    res.render('version1-8/AATF-Returns/SC002_1d-How-would-you-like-to-report');
});

router.post('/version1-8/AATF-Returns/What-do-you-need-to-report-on', function (req, res) {

    res.redirect('/version1-8/AATF-Returns/select-your-pcs');
});

router.get('/version1-8/Upload-Returns/Upload-your-facility-data', function(req, res) {
    var period = req.session.data['period'];

    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['firstUpload'] = true;
    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-8/Upload-Returns/SC014_1-Upload-an-aatf-return-browse');
})

router.post('/version1-8/AATF-Returns/find-scheme', function (req, res) {
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
    res.render('version1-8/transform-paste');
});

router.get('/version1-8/complete', function (req, res) {

    var schemes = req.session.data['schemes'];

    res.render('version1-8/auto-complete');
})

router.get('/version1-8/AATF-Returns/My-facilities', function (req, res) {

    var period = req.session.data['period'];

    if (period._operator._categories){
        period._operator._wee = CategoriesTotal(period._operator._categories).toFixed(3);
    }
    if (period._operator._categoriesDcf){
        period._operator._weeDcf = CategoriesTotal(period._operator._categoriesDcf).toFixed(3);
    }
    
    req.session.data['period'] = period;

    for (var i = 0; i < period._facilities.length; i++) {
        if (period._facilities[i]._pcs.length > 0) {
            if (period._facilities[i]._hasEnteredData) {
                var totalb2c = 0;
                var totalb2b = 0;
                for (var j = 0; j < period._facilities[i]._pcs.length; j++) {
                    totalb2c += CategoriesTotal(period._facilities[i]._pcs[j]._weeeReceived);
                    totalb2b += CategoriesTotal(period._facilities[i]._pcs[j]._weeeReceivedb2b);
                }

                period._facilities[i]._totalb2c = totalb2c.toFixed(3);
                period._facilities[i]._totalb2b = totalb2b.toFixed(3);
            }
        }

        if (period._facilities[i]._sentOnOperatorCollection) {
            var sentonb2c = 0;
            var sentonb2b = 0;
            for (var j = 0; j < period._facilities[i]._sentOnOperatorCollection.length; j++) {
                sentonb2c += CategoriesTotal(period._facilities[i]._sentOnOperatorCollection[j]._sentToAnotherAtfForTreatmentb2c);
                sentonb2b += CategoriesTotal(period._facilities[i]._sentOnOperatorCollection[j]._sentToAnotherAtfForTreatmentb2b);
            }
            period._facilities[i]._sentonb2c = sentonb2c.toFixed(3);
            period._facilities[i]._sentonb2b = sentonb2b.toFixed(3);
        }

        /*         if (period._facilities[i]._weeeReusedb2c){
                    var reusedb2c = Number(CategoriesTotal(period._facilities[i]._weeeReusedb2c));
                    period._facilities[i]._reusedb2c = reusedb2c.toFixed(3);     
                }
                if (period._facilities[i]._weeeReusedb2b){
                    var reusedb2b = Number(CategoriesTotal(period._facilities[i]._weeeReusedb2c));
                    period._facilities[i]._reusedb2b = reusedb2b.toFixed(3);     
                }  */
    }
    res.render('version1-8/AATF-Returns/SC002_1-My-facilities-3');
})

router.get('/version1-8/AATF-Returns/PCS-Return', function (req, res) {
    var period = req.session.data['period'];
    var facilityId = req.query['facilityid'];
    var localWEEETotal = 0.000;
    var localWEEETotalb2b = 0.000;

    for (var i = 0; i < period._facilities.length; i++) {
        if (i == facilityId) {
            for (var j = 0; j < period._facilities[i]._pcs.length; j++) {
                var weeeReceivedTotal = CategoriesTotal(period._facilities[i]._pcs[j]._weeeReceived);
                var weeeReceivedTotalb2b = CategoriesTotal(period._facilities[i]._pcs[j]._weeeReceivedb2b);
                localWEEETotal += Number(weeeReceivedTotal);
                localWEEETotalb2b += Number(weeeReceivedTotalb2b);
                period._facilities[i]._pcs[j]._weeeReceivedTotal = weeeReceivedTotal;
                period._facilities[i]._pcs[j]._weeeReceivedTotalb2b = weeeReceivedTotalb2b;
            }
        }
        period._facilities[i]._weeeReceivedTotal = localWEEETotal.toFixed(3);
        period._facilities[i]._weeeReceivedTotalb2b = localWEEETotalb2b.toFixed(3);
    }
    req.session.data['period'] = period;
    res.redirect('/version1-8/AATF-Returns/My-facilities');
})

router.get('/version1-8/AATF-Returns/compliance-reporting', function (req, res) {

    res.render('version1-8/AATF-Returns/SC002_2-compliance-and-reporting');
})

router.get('/version1-8/AATF-Returns/WEEE-received-for-treatment', function (req, res) {
    var schemeId = req.query['schemeId'];
    var schemes = req.session.data['schemes'];
    var selectedScheme = schemes._schemes.filter(function (scheme) {
        if (scheme._id === schemeId) {
            return true;
        }
    });
    req.session.data['selectedScheme'] = selectedScheme[0];

    res.redirect('SC009-Enter-WEEE-that-has-been-received-for-treatment');
})

router.get('/version1-8/AATF-Returns/WEEE-received-for-treatment-paste', function (req, res) {
    res.redirect('SC009-Enter-WEEE-that-has-been-received-for-treatment');
})


/*
router.get('/version1-8/AATF-Returns/Are-you-sending-any-WEEE-to-another-ATF-for-treatment', function (req, res) {
    var schemeId = req.query['schemeId'];
    var schemes = req.session.data['schemes'];

    var selectedScheme = schemes._schemes.filter(function (scheme) {
        if (scheme._id === schemeId) {
            return true;
        }
    });

    req.session.data['selectedScheme'] = selectedScheme[0];

    res.render('version1-8/AATF-Returns/SC016-Are-you-sending-any-WEEE-to-another-ATF-for-treatment');
})
*/
router.get('/version1-8/AATF-Returns/SC004-Would-you-like-to-report-on-any-non-obligated-weee', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/What-do-you-need-to-report-on');
})

router.get('/version1-8/AATF-Returns/aatf-option-select', function (req, res) {


    if (req.session.data['aatf-return-option'] === 'aatfReturn') {
        res.redirect('/version1-8/AATF-Returns/PCS-Table');
    }
    if (req.session.data['aatf-return-option'] === 'aatfNilReturn') {

        let period = req.session.data['period'];

        var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
            if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
                return true;
            }
        });

        selectedFacility[0]._hasEnteredData = false;

        res.redirect('/version1-8/AATF-Returns/SC013_1-Confirmation-of-nil-return');
    }
    if (req.session.data['aatf-return-option'] === 'aatfUpload') {
        res.redirect('/version1-8/AATF-Returns/SC014_1-Upload-an-aatf-return-browse');
    }
})


router.post('/version1-8/login-button', function (req, res) {
    res.redirect('/version1-8/SC002-What-would-you-like-to-do')
})

router.post('/version1-8/AATF-Returns/save-and-continue', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC004-Are-you-reporting-on-any-non-obligated-weee')
})

router.get('/version1-8/AATF-Returns/Make-an-AATF-return-options', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-8/AATF-Returns/SC002_1a-Make-an-AATF-return-options');
})

router.get('/version1-8/AATF-Returns/Report-options', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-8/AATF-Returns/SC002_1d-How-would-you-like-to-report');
})

router.post('/version1-8/AATF-Returns/save-and-continue-change', function (req, res) {
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

    res.redirect('/version1-8/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-8/AATF-Returns/non-obligated-save', function (req, res) {

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

    res.redirect('/version1-8/AATF-Returns/My-Facilities');
})

router.post('/version1-8/Upload-Returns/non-obligated-save', function (req, res) {

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

    res.redirect('/version1-8/Upload-Returns/Task-list-for-upload');
})

router.get('/version1-8/Upload-Returns/Task-list-for-upload', function (req, res) {
    var period = req.session.data['period'];

    if (period._operator._categories){
        period._operator._wee = CategoriesTotal(period._operator._categories).toFixed(3);
    }
    if (period._operator._categoriesDcf){
        period._operator._weeDcf = CategoriesTotal(period._operator._categoriesDcf).toFixed(3);
    }
    
    req.session.data['period'] = period;

    res.render('version1-8/Upload-Returns/SC002_1v-Task-list-for-upload');
})

router.post('/version1-8/AATF-Returns/dcf-save', function (req, res) {

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

    res.redirect('/version1-8/AATF-Returns/My-facilities');
})

router.post('/version1-8/Upload-Returns/dcf-save', function (req, res) {

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

    res.redirect('/version1-8/Upload-Returns/Task-list-for-upload');
})

router.post('/version1-8/AATF-Returns/facility-save', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC005a-Select-Facility-Confirmation')
})

router.post('/version1-8/AATF-Returns/facility-save-change', function (req, res) {
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

    res.redirect('/version1-8/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-8/AATF-Returns/facility-cancel', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC005-Select-Facility')
})

router.post('/version1-8/AATF-Returns/facility-confirm', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC006x-Do-you-want-to-report-on-multiple-pcs')
})

router.post('/version1-8/AATF-Returns/scheme-add', function (req, res) {
    req.session.data['WEEE-received-for-treatment-result'] = "0.000"
    req.session.data['WEEE-resused-as-a-whole-appliance-result'] = "0.000"
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = "0.000"
    res.redirect('/version1-8/AATF-Returns/SC006_1a-Is-this-the-correct-PCS-that-you-wish-to-report-on')
})

router.get('/version1-8/AATF-Returns/PCS-Table', function (req, res) {

    res.redirect('/version1-8/AATF-Returns/SC007-PCS-Table')
})

router.post('/version1-8/AATF-Returns/scheme-confirm', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/PCS-Table')
})


router.post('/version1-8/AATF-Returns/scheme-cancel', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/PCS-Table')
})

router.get('/version1-8/AATF-Returns/PCS-Table', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/PCS-Table');
})

router.post('/version1-8/AATF-Returns/add-pcs', function (req, res) {
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

    res.redirect('/version1-8/AATF-Returns/SC007-PCS-Table')
})

router.post('/version1-8/AATF-Returns/weee-received-for-treatment-save', function (req, res) {
    var period = req.session.data['period'];

    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    var updateFacilityScheme = updateFacility[0]._pcs.filter(function (scheme) {
        if (scheme._id === req.session.data['selectedScheme']._id) {
            return true;
        }
    });

    updateFacilityScheme[0]._hasEnteredData = true;
    updateFacility[0]._hasEnteredData = true;

    var items = [req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']]
    var itemsb2b = [req.session.data['large-household-appliances-input-SC009-b2b'], req.session.data['small-household-appliances-input-SC009-b2b'], req.session.data['it-and-telecomms-input-SC009-b2b'], req.session.data['consumer-equipment-input-SC009-b2b'], req.session.data['lighting-equipment-input-SC009-b2b'], req.session.data['electrical-and-electronic-input-SC009-b2b'], req.session.data['toys-leisure-sports-input-SC009-b2b'], req.session.data['medical-devices-input-SC009-b2b'], req.session.data['monitoring-control-input-SC009-b2b'], req.session.data['automatic-dispensers-input-SC009-b2b'], req.session.data['display-equipment-input-SC009-b2b'], req.session.data['cooling-appliance-input-SC009-b2b'], req.session.data['gas-discharge-led-input-SC009-b2b'], req.session.data['photovolatic-panels-input-SC009-b2b']]
    var result = 0;
    var resultb2b = 0;

    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        resultb2b += Number(itemsb2b[i])
    }
    req.session.data['WEEE-received-for-treatment-result'] = result.toFixed(3);
    req.session.data['WEEE-received-for-treatment-result-b2b'] = resultb2b.toFixed(3);

    updateFacilityScheme[0]._weeeReceived = new Categories(req.session.data['large-household-appliances-input-SC009'], req.session.data['small-household-appliances-input-SC009'], req.session.data['it-and-telecomms-input-SC009'], req.session.data['consumer-equipment-input-SC009'], req.session.data['lighting-equipment-input-SC009'], req.session.data['electrical-and-electronic-input-SC009'], req.session.data['toys-leisure-sports-input-SC009'], req.session.data['medical-devices-input-SC009'], req.session.data['monitoring-control-input-SC009'], req.session.data['automatic-dispensers-input-SC009'], req.session.data['display-equipment-input-SC009'], req.session.data['cooling-appliance-input-SC009'], req.session.data['gas-discharge-led-input-SC009'], req.session.data['photovolatic-panels-input-SC009']);
    updateFacilityScheme[0]._weeeReceivedb2b = new Categories(req.session.data['large-household-appliances-input-SC009-b2b'], req.session.data['small-household-appliances-input-SC009-b2b'], req.session.data['it-and-telecomms-input-SC009-b2b'], req.session.data['consumer-equipment-input-SC009-b2b'], req.session.data['lighting-equipment-input-SC009-b2b'], req.session.data['electrical-and-electronic-input-SC009-b2b'], req.session.data['toys-leisure-sports-input-SC009-b2b'], req.session.data['medical-devices-input-SC009-b2b'], req.session.data['monitoring-control-input-SC009-b2b'], req.session.data['automatic-dispensers-input-SC009-b2b'], req.session.data['display-equipment-input-SC009-b2b'], req.session.data['cooling-appliance-input-SC009-b2b'], req.session.data['gas-discharge-led-input-SC009-b2b'], req.session.data['photovolatic-panels-input-SC009-b2b']);
    updateFacilityScheme[0]._weeeReceivedTotal = req.session.data['WEEE-received-for-treatment-result'];
    updateFacilityScheme[0]._weeeReceivedTotalb2b = req.session.data['WEEE-received-for-treatment-result-b2b'];

    req.session.data['selectedScheme'] = updateFacilityScheme[0];
    req.session.data['selectedFacility'] = updateFacility[0];

    req.session.data['paste-values'] = '';
    req.session.data['period'] = period;
    
    res.redirect('/version1-8/AATF-Returns/SC007-PCS-Table');
})

router.post('/version1-8/AATF-Returns/weee-reused-as-a-whole-appliance-save', function (req, res) {
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
    res.redirect('/version1-8/AATF-Returns/SC016-Reuse-Table')
})

router.post('/version1-8/AATF-Returns/weee-reused-as-a-whole-appliance-this-facility-save', function (req, res) {

    var period = req.session.data.period;
    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    /*     var updateScheme = updateFacility[0]._pcs.filter(function (scheme) {
            if (scheme._id === req.session.data['selectedScheme']._id) {
                return true;
            }
        }); */

    updateFacility[0]._weeeReusedb2c = new Categories(req.session.data['large-household-appliances-input-SC010'], req.session.data['small-household-appliances-input-SC010'], req.session.data['it-and-telecomms-input-SC010'], req.session.data['consumer-equipment-input-SC010'], req.session.data['lighting-equipment-input-SC010'], req.session.data['electrical-and-electronic-input-SC010'], req.session.data['toys-leisure-sports-input-SC010'], req.session.data['medical-devices-input-SC010'], req.session.data['monitoring-control-input-SC010'], req.session.data['automatic-dispensers-input-SC010'], req.session.data['display-equipment-input-SC010'], req.session.data['cooling-appliance-input-SC010'], req.session.data['gas-discharge-led-input-SC010'], req.session.data['photovolatic-panels-input-SC010']);
    updateFacility[0]._weeeReusedb2b = new Categories(req.session.data['large-household-appliances-input-SC010-b2b'], req.session.data['small-household-appliances-input-SC010-b2b'], req.session.data['it-and-telecomms-input-SC010-b2b'], req.session.data['consumer-equipment-input-SC010-b2b'], req.session.data['lighting-equipment-input-SC010-b2b'], req.session.data['electrical-and-electronic-input-SC010-b2b'], req.session.data['toys-leisure-sports-input-SC010-b2b'], req.session.data['medical-devices-input-SC010-b2b'], req.session.data['monitoring-control-input-SC010-b2b'], req.session.data['automatic-dispensers-input-SC010-b2b'], req.session.data['display-equipment-input-SC010-b2b'], req.session.data['cooling-appliance-input-SC010-b2b'], req.session.data['gas-discharge-led-input-SC010-b2b'], req.session.data['photovolatic-panels-input-SC010-b2b']);
    req.session.data['paste-values'] = '';

    res.redirect('/version1-8/AATF-Returns/SC008_3-Is-this-whole-weee-being-sent-to-another-site')
})

router.post('/version1-8/AATF-Returns/Whole-WEEE-sent-to-another-treatment-save', function (req, res) {
    var period = req.session.data['period'];
    var selectedSentOnId = req.session.data['selectedSentOnForTreatmentId'];

    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    var sentOnUpdate = updateFacility[0]._sentOnOperatorCollection.filter(function (sentOn) {
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
    var resultb2b = 0;
    for (var i = 0; i < items.length; i++) {
        result += Number(items[i])
    }
    for (var i = 0; i < itemsb2b.length; i++) {
        resultb2b += Number(itemsb2b[i])
    }
    var resultTotal = result + resultb2b;
    sentOnUpdate[0]._sentToB2B = resultb2b.toFixed(3);
    sentOnUpdate[0]._sentToB2C = result.toFixed(3);
    sentOnUpdate[0]._sentToResult = resultTotal.toFixed(3);
    req.session.data['period'] = period;
    req.session.data['selectedFacility'] = updateFacility[0];
    req.session.data['Whole-WEEE-sent-to-another-treatment-result'] = result.toFixed(3)
    req.session.data['paste-values'] = '';
    var selectedFacility = req.session.data['selectedFacility'];

    res.redirect('/version1-8/AATF-Returns/SC016_1-Add-a-table-here-for-the-ATF-treatment')
})

router.get('/version1-8/AATF-Returns/Sent-On-ATF', function (req, res) {
    req.session.data['sentOnWorking'] = req.query['id'];

    res.render('version1-8/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment');
})

router.post('/version1-8/AATF-Returns/add-another-scheme', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC012-Would-you-like-to-add-another-scheme')
})

router.post('/version1-8/AATF-Returns/atf-treatment-save', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/My-facilities')
})

router.post('/version1-8/AATF-Returns/reuse-treatment-save', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/My-facilities')
})

router.post('/version1-8/Upload-Returns/upload-an-aatf-successful', function (req, res) {
    var selectedFacility = req.session.data['selectedFacility'];
    var period = req.session.data['period'];

    for (var i = 0; i < period._facilities.length; i++) {
        if(period._facilities[i]._name == selectedFacility._name) {
            var number = Math.floor((Math.random() * 100) + 1).toFixed(3);
            period._facilities[i]._totalb2c = number;
            number = Math.floor((Math.random() * 100) + 1).toFixed(3);
            period._facilities[i]._totalb2b = number;
            period._facilities[i]._hasBeenUploaded = true;
        }
    }
    
    req.session.data['period'] = period;

    res.redirect('/version1-8/Upload-Returns/SC002_1v-Task-list-for-upload')
})

router.get('/version1-8/Upload-Returns/upload-an-aatf-failed', function (req, res) {
    res.redirect('/version1-8/Upload-Returns/SC014_1-Upload-an-aatf-return-browse?firstUpload=false')
})

router.get('/version1-8/Upload-Returns/upload-an-aatf-return-is-this-correct', function (req, res) {
    var upload = req.session.data['firstUpload'];
    var confirmation = req.session.data['aatf-return-confirm-option'];

    if (confirmation === '1'){
        if (upload==='false') {
            res.redirect('/version1-8/Upload-Returns/SC014_3-File-upload-successful');
        } else {
            res.redirect('/version1-8/Upload-Returns/SC014_4-File-upload-failed');
        }
    } else{
        res.redirect('/version1-8/Upload-Returns/SC014_1-Upload-an-aatf-return-browse?firstUpload=' + upload)
    }
})

router.get('/version1-8/Upload-Returns/upload-an-aatf-return-select', function (req, res) {

    var upload = req.session.data['firstUpload'];

    res.redirect('/version1-8/Upload-Returns/SC014_2-Is-this-file-correct?firstUpload=' + upload)
})

router.post('/version1-8/Upload-Returns/upload-an-aatf-return', function (req, res) {
    res.redirect('/version1-8/Upload-Returns/SC014_1-Upload-an-aatf-return-browse')
})

router.post('/version1-8/AATF-Returns/add-another-scheme-answer', function (req, res) {
    let answer = req.session.data['another-scheme']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/SC007-AATF-Tasklist')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC006-Add-Scheme')
    }
})

router.post('/version1-8/AATF-Returns/whole-weee-answer', function (req, res) {
    let answer = req.session.data['whole-weee']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/My-facilities')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC016_2-Which-operator-is-this-WEEE-being-sent-to-for-treatment?facility=' + req.session.data.facilityId + '&facilityId=' + req.session.data.facilityId + '&scheme=' + req.session.data.scheme + '&schemeId=' + req.session.data.schemeId)
    }
})



router.post('/version1-8/AATF-Returns/what-to-do-select', function (req, res) {
    let answer = req.session.data['what-to-do-option']

    if (answer === '1') {
        res.redirect('/version1-8/AATF-Returns/SC015-Check-your-AATF-return-v2')
    } else if (answer === '2') {
        res.redirect('/version1-8/AATF-Returns/PCS-Table')
    } else if (answer === '3') {
        res.redirect('/version1-8/AATF-Returns/My-facilities')
    }
})

router.post('/version1-8/AATF-Returns/multiple-scheme-select-answer', function (req, res) {
    let answer = req.session.data['multiple-scheme-select']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/SC006-Add-Scheme')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC006-Add-the-PCS-that-you-wish-to-report')
    }
})

router.post('/version1-8/AATF-Returns/multiple-pcs-save', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/PCS-Table')
})

router.post('/version1-8/AATF-Returns/pcs-check-my-return', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC015-Check-your-AATF-return-v3');
})

router.post('/version1-8/AATF-Returns/reusing-weee-answer', function (req, res) {
    let answer = req.session.data['reusing-weee']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/My-facilities')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC008_2-Enter-WEEE-that-has-been-reused-as-a-whole-appliance')

        //res.redirect('/version1-8/AATF-Returns/SC008_1-Is-this-whole-weee-being-reused-at-this-facility')
    }
})

router.post('/version1-8/AATF-Returns/reusing-weee-at-this-facility-answer', function (req, res) {
    let answer = req.session.data['reusing-weee-at-this-facility']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/SC008_3-Is-this-whole-weee-being-sent-to-another-site')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC010-WEEE-reused-as-a-whole-appliance-this-facility')
    }
})

router.post('/version1-8/AATF-Returns/reusing-weee-sent-to-another-site-answer', function (req, res) {
    let answer = req.session.data['reusing-weee-sent-to-another-site']

    if (answer === 'false') {
        var period = req.session.data['period'];
        var updateFacility = period._facilities.filter(function (facility) {
            if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
                return true;
            }
        });
        if (updateFacility[0]._weeeReusedb2c) {
            var reusedb2c = Number(CategoriesTotal(updateFacility[0]._weeeReusedb2c));
            updateFacility[0]._reusedb2c = reusedb2c.toFixed(3);
        }
        if (updateFacility[0]._weeeReusedb2b) {
            var reusedb2b = Number(CategoriesTotal(updateFacility[0]._weeeReusedb2b));
            updateFacility[0]._reusedb2b = reusedb2b.toFixed(3);
        }

        req.session.data['selectedFacility'] = updateFacility[0];
        req.session.data['period'] = period;
        res.redirect('/version1-8/AATF-Returns/My-facilities')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC008_5-Which-site-is-this-WEEE-being-sent-to-for-reuse-as-a-whole-appliance')
    }
})

router.post('/version1-8/AATF-Returns/operator-details-answer', function (req, res) {
    let answer = req.session.data['operator-details']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/SC008c-Facility-Address-Locator')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC007-AATF-Tasklist')
    }
})

router.post('/version1-8/AATF-Returns/atf-same-as-operator-answer', function (req, res) {
    let answer = req.session.data['atf-same-as-operator']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/SC016_2b-Provide-the-address-of-the-ATF')
    } else {

        var operator = req.session.data["selectedOperator"];
        var period = req.session.data['period'];

        //var selectedScheme = GetSelectedScheme(period, req.session.data["selectedFacility"]._id, req.session.data["selectedScheme"]._id);
        var selectedFacility = Selectedfacility(req, req.session.data['selectedFacility']._id);
        var selectedAtf = selectedFacility._sentOnOperatorCollection.filter(function (senton) {
            if (parseInt(senton._id) === parseInt(req.session.data['selectedSentOnForTreatmentId'])) {
                return true;
            }
        });

        var newOperator = new Operator(operator._name, 0, '', operator._address._street, operator._address._town, operator._address._country, operator._address._postcode);
        selectedAtf[0]._atfAddress = newOperator;

        req.session.data['period'] = period;
        res.redirect('/version1-8/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment')
    }
})

router.post('/version1-8/AATF-Returns/non-obligated-weee-answer', function (req, res) {

    let answer = req.session.data['non-obligated-weee']
    let period = req.session.data['period'];

    if (answer === 'false') {

        if (period._operator._categories) {
            period._operator._categories = null;
            period._operator._categoriesDcf = null;
        }
        res.redirect('/version1-8/AATF-Returns/My-facilities')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC004_1-Enter-non-obligated-WEEE')
    }
})

router.post('/version1-8/AATF-Returns/non-obligated-weee-DCF-answer', function (req, res) {
    let answer = req.session.data['non-obligated-weee-DCF']

    if (answer === 'false') {
        res.redirect('/version1-8/AATF-Returns/My-facilities')
    } else {
        res.redirect('/version1-8/AATF-Returns/SC004_2a-Add-any-DCF-data')
    }
})

router.post('/version1-8/AATF-Returns/operator-address-full-save', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC007-AATF-Tasklist')
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

router.post('/version1-8/AATF-Returns/operator-address-postcode-save', function (req, res) {
    var period = req.session.data['period'];
    var selectedFacility = Selectedfacility(req, req.session.data['selectedFacility']._id);
    var siteNameManual = req.session.data['operator-name'];
    var sitePostcodeManual = req.session.data['operator-postcode'];

    if (!selectedFacility._sentOnOperatorCollection) {
        selectedFacility._sentOnOperatorCollection = [];
    }
    var operatorName;
    var operatorPostcode;

    operatorName = req.session.data['operator-name-search'];
    operatorPostcode = req.session.data['operator-postcode-search'];

    if (typeof operatorName === 'undefined' || operatorName == '') {
        operatorName = siteNameManual;
        operatorPostcode = sitePostcodeManual;
    }

    var newOperator = new Operator(operatorName, selectedFacility._sentOnOperatorCollection.length, '', req.session.data['operator-building-street'], req.session.data['operator-town-city'], req.session.data['operator-county'], operatorPostcode);
    selectedFacility._sentOnOperatorCollection.push(newOperator);

    req.session.data['selectedFacility'] = selectedFacility;
    req.session.data['period'] = period;
    req.session.data['selectedOperator'] = newOperator;
    req.session.data['selectedSentOnForTreatmentId'] = selectedFacility._sentOnOperatorCollection.length - 1;
    req.session.data['site-address-operator'] = '';
    req.session.data['operator-name-search'] = '';
    operatorPostcode = req.session.data['operator-postcode-search'] = '';
    res.redirect('/version1-8/AATF-Returns/SC016_2a-Is-the-atf-address-the-same-as-the-facility')
})

router.post('/version1-8/AATF-Returns/operator-address-postcode-atf-save', function (req, res) {
    var period = req.session.data['period'];
    var operatorNameManual = req.session.data['aatf-name'];
    var operatorBuildingManual = req.session.data['aatf-building'];
    var operatorStreetManual = req.session.data['aatf-street'];
    var operatorTownManual = req.session.data['aatf-town'];
    var operatorCountyManual = req.session.data['aatf-county'];
    var operatorPostCodeManual = req.session.data['aatf-postcode'];
    //var selectedScheme = GetSelectedScheme(period, req.session.data["selectedFacility"]._id, req.session.data["selectedScheme"]._id);
    var selectedFacility = Selectedfacility(req, req.session.data['selectedFacility']._id);

    var operatorName;
    var operatorPostcode;

    operatorName = req.session.data['operator-name-search-3'];

    operatorPostcode = req.session.data['operator-postcode-search-3'];

    if (typeof operatorPostcode === 'undefined' || operatorPostcode == '') {
        operatorName = operatorNameManual;
        operatorPostcode = operatorPostCodeManual;
    }

    var selectedAtf = selectedFacility._sentOnOperatorCollection.filter(function (senton) {
        if (parseInt(senton._id) === parseInt(req.session.data['selectedSentOnForTreatmentId'])) {
            return true;
        }
    });

    var newOperator = new Operator(operatorName, selectedFacility._sentOnOperatorCollection.length, '', req.session.data['operator-building-street'], req.session.data['operator-town-city'], req.session.data['operator-county'], operatorPostcode);
    selectedAtf[0]._atfAddress = newOperator;

    req.session.data['period'] = period;
    req.session.data['selectedFacility'] = selectedFacility;
    req.session.data['site-address-operator-3'] = '';
    req.session.data['operator-name-search-3'] = '';
    operatorPostcode = req.session.data['operator-postcode-search-3'] = '';
    res.redirect('/version1-8/AATF-Returns/SC016_3-Enter-whole-WEEE-that-has-been-sent-to-another-ATF-for-treatment')
})

router.post('/version1-8/AATF-Returns/operator-address-postcode-save-2', function (req, res) {
    var period = req.session.data['period'];
    var siteName = req.session.data['operator-name-search-2'];
    var sitePostcode = req.session.data['operator-postcode-search-2'];
    var siteNameManual = req.session.data['reuse-name'];
    var siteBuildingManual = req.session.data['reuse-building'];
    var siteStreetManual = req.session.data['reuse-street'];
    var siteTownManual = req.session.data['reuse-town'];
    var siteCountyManual = req.session.data['reuse-county'];
    var sitePostCodeManual = req.session.data['reuse-postcode'];
    var siteArray = [];
    if (typeof siteName === 'undefined') {
        siteName = siteNameManual;
        sitePostcode = sitePostCodeManual;
    } else {
        siteBuildingManual = '';
        siteCountyManual = '';
        siteStreetManual = '';
        siteTownManual = '';
    }
    
    siteArray = [siteName, siteStreetManual, siteTownManual, siteCountyManual, sitePostcode];


    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    updateFacility[0]._reusedSites.push(siteArray);

    if (updateFacility[0]._weeeReusedb2c) {
        var reusedb2c = Number(CategoriesTotal(updateFacility[0]._weeeReusedb2c));
        updateFacility[0]._reusedb2c = reusedb2c.toFixed(3);
    }
    if (updateFacility[0]._weeeReusedb2b) {
        var reusedb2b = Number(CategoriesTotal(updateFacility[0]._weeeReusedb2b));
        updateFacility[0]._reusedb2b = reusedb2b.toFixed(3);
    }

    req.session.data['selectedFacility'] = updateFacility[0];
    req.session.data['period'] = period;
    
    res.redirect('/version1-8/AATF-Returns/SC008_7-Enter-name-and-address-of-all-sites')
})

router.post('/version1-8/AATF-Returns/submit-scheme-for-approval', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC015-Check-your-AATF-return-v2')
})

router.post('/version1-8/AATF-Returns/submit-aatf-return', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC016-Submission-complete')
})

router.post('/version1-8/AATF-Returns/facility-address-postcode-save', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC007-AATF-Tasklist')
})

router.post('/version1-8/AATF-Returns/nil-return-confirm', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/My-facilities')
})

router.post('/version1-8/AATF-Returns/compliance-reporting-continue', function (req, res) {

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

    res.redirect('/version1-8/AATF-Returns/SC002_1c-Start-report');
})

router.post('/version1-8/AATF-Returns/compliance-reporting-start', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/SC002_1d-How-would-you-like-to-report')
})

router.post('/version1-8/AATF-Returns/compliance-reporting-end', function (req, res) {
    SetupData(req);

    let answer = req.session.data['compliance-reporting-option']

    if (answer === '1') {
        res.redirect('/version1-8/AATF-Returns/SC018-What-do-you-need-to-report-on');
    } else if (answer === '2') {
        res.redirect('/version1-8/Upload-Returns/sc002_1g_what_do_you_want_to_report_on_upload');
    } else if (answer === '3') {
        res.redirect('/version1-8/AATF-Returns/SC013_1-Confirmation-of-nil-return')
    }
})

router.post('/version1-8/start-options-select', function (req, res) {
    let answer = req.session.data['start-options']

    if (answer === '1') {
        res.redirect('/version1-8/AATF-Returns/SC002_2-compliance-and-reporting')
    }
    if (answer === '2') {
        res.redirect('/version1-8/AATF-Returns/ae-return')
    }
})

router.get('/version1-8/AATF-Returns/Enter-WEEE-that-has-been-received-for-treatment', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-8/AATF-Returns/SC009-Enter-WEEE-that-has-been-received-for-treatment');
})

router.get('/version1-8/AATF-Returns/PCS-Table', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    res.redirect('/version1-8/AATF-Returns/SC007-PCS-Table?');

})

router.get('/version1-8/AATF-Returns/Are-you-sending-any-WEEE-to-another-ATF-for-treatment', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['operator-name-search'] = '';
    req.session.data['operator-postcode-search'] = '';
    req.session.data['site-address-operator'] = '';

    req.session.data['selectedFacility'] = selectedFacility[0];
    if (selectedFacility[0]._sentOnOperatorCollection) {
        res.redirect('/version1-8/AATF-Returns/SC016_1-Add-a-table-here-for-the-ATF-treatment');
    } else {
        res.redirect('/version1-8/AATF-Returns/SC016_2-Which-operator-is-this-WEEE-being-sent-to-for-treatment?facility=' + req.session.data.facilityId + '&facilityId=' + req.session.data.facilityId + '&scheme=' + req.session.data.scheme + '&schemeId=' + req.session.data.schemeId);
    }
})

router.get('/version1-8/AATF-Returns/Do-you-need-to-report-any-WEEE-reused-as-a-whole-appliance', function (req, res) {
    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];
    if (selectedFacility[0]._reusedSites[0]) {
        res.redirect('/version1-8/AATF-Returns/SC008_7-Enter-name-and-address-of-all-sites');
    } else {
        res.redirect('/version1-8/AATF-Returns/SC008_2-Enter-WEEE-that-has-been-reused-as-a-whole-appliance');
    }
})

router.get('/version1-8/AATF-Returns/PCS-selection', function (req, res) {
    var period = req.session.data['period'];

    var selectedFacility = req.session.data['period']._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.query['facilityId'])) {
            return true;
        }
    });

    req.session.data['selectedFacility'] = selectedFacility[0];

    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });
    if (typeof updateFacility[0]._pcs[0] === "undefined") {
        res.redirect('/version1-8/AATF-Returns/SC007-PCS-Table');
    } else {
        res.redirect('/version1-8/AATF-Returns/SC007-PCS-Table');
    }
})

router.post('/version1-8/AATF-Returns/pcs-selection-form-save', function (req, res) {
    var period = req.session.data['period'];
    var schemeID;

    var updateFacility = period._facilities.filter(function (facility) {
        if (parseInt(facility._id) === parseInt(req.session.data['selectedFacility']._id)) {
            return true;
        }
    });

    var selectedScheme = req.session.data.schemes._schemes.filter(function (scheme) {
        if (scheme._id === req.session.data['scheme-name-id']) {
            schemeID = scheme._id;
            return true;
        }
    });

    updateFacility[0]._pcs.push(selectedScheme[0]);
    req.session.data['selectedFacility'] = updateFacility[0];
    req.session.data['period'] = period;

    res.redirect('/version1-8/AATF-Returns/WEEE-received-for-treatment?schemeId=' + schemeID);
})

router.post('/version1-8/AATF-Returns/pcs-selection-form-cancel', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/My-facilities');
})

router.get('/version1-8/AATF-Returns/atf-summary', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/My-facilities');
})

router.get('/version1-8/AATF-Returns/pcs-summary', function (req, res) {
    res.redirect('/version1-8/AATF-Returns/My-facilities');
})

router.post('/version1-8/AATF-Returns/perform-another-activity', function (req, res) {
    res.redirect('/version1-8/SC002-What-would-you-like-to-do');
})

router.post('/version1-8/Upload-Returns/sc002_1g_what_do_you_want_to_report_on_upload', function (req, res){
    
    if (req.session.data['receivedoption-upload'] === 'yes') {
        res.redirect('/version1-8//Upload-Returns/sc002_1h_what_do_you_want_to_report_on_upload');
    } else {
        res.redirect('/version1-8//Upload-Returns/Task-list-for-upload');
    }
})

module.exports = router;
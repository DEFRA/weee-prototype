const router = require('express').Router();
const Categories = require('../../data/categories');
const EvidenceNote = require('../../data/evidence-note');
const Facility = require('../../data/facility');
const Schemes = require('../../data/schemes');
const moment = require('../version-2/moment');

function SetupData(req) {
    var schemes = new Schemes();

    //period._operator._categories = new Categories('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
    //resetNonObligated(req);


    var facilities = [];
    facilities.push(new Facility('ABB Ltd Darlaston', 1, 'WEE/AB1234GH/ATF'));
    facilities.push(new Facility('ABB Ltd Woking', 2, 'WEE/AB5678GH/ATF'));
    facilities.push(new Facility('ABB Ltd Maidenhead', 3, 'WEE/AB9012GH/ATF'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';
}

router.post('/version-2/choose-activity-redirect', function (req, res) {
    
    const activity = req.session.data['choose-activity'];

    if (activity === '7') {
        SetupData(req);

        res.redirect('/version-2/202_Choose_site');
    }

    
    res.redirect('/version-2/index');
});

router.post('/version-2/choose-site-redirect', function(req, res){
    var facilities = req.session.data['facilities'];
    var selectedFacility = req.session.data['choose-site'];

    if (!facilities || facilities.length === 0){
        facilities = [];
    }

    facility = facilities.find(fac => fac._approvalNumber === selectedFacility);
    facility._evidenceNotes = [];

    var receieved1 = new Categories(48, 21, 1, null, null, 14, 32, 11, null, 3, 1, null, 5, null);
    var reused1 = new Categories(2, null, 1, null, null, 3, null, 1, null, null, null, 1, 1, null);

    var receieved2 = new Categories(null, 56, null, 3, 1, 12, null, 80, 6, null, null, null, null, null);
    var reused2 = new Categories(null, 1, null, null, 6, 10, 2, 1, null, null, null, 1, 1, null);

    facility._evidenceNotes.push(new EvidenceNote('01/01/2020', '01/01/2021', 'Waste Electrical Recycling Compliance Scheme', '2020', 'Household', 'Actual', receieved1, reused1, "Draft", Math.floor(1000 + Math.random() * 9000), '11/11/2021 11:32:40'));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Compliance Scheme', '2021', 'Household', 'Actual', receieved2, reused2, "Submitted", Math.floor(1000 + Math.random() * 9000), '01/12/2021 10:28:37'));

    var date = new Date(2021, 03, 13, 18, 00, 0);
    facility._evidenceNotes[1]._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');

    facility._evidenceNotes.forEach(element => {
        if (element._submittedDate){
            element._searchDate = moment(element._submittedDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD');
            //element._searchDate = _submittedDate
        }
    });

    req.session.data['facilities']  = facilities;
    req.session.data['chosen-facility'] = facility; 

    
    //console.log(req.session.data['chosen-facility']._evidenceNotes);
    res.redirect('/version-2/manage-evidence-redirect');
});

router.get('/version-2/manage-evidence-redirect', function(req, res){
    res.redirect('/version-2/203_Manage_evidence');
});

router.post('/version-2/create-evidence-note-redirect', function(req, res){
    res.redirect('/version-2/205_Create_evidence_note_no_protocol');
});

router.post('/version-2/save-create-evidence-note', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    var facilities = req.session.data['facilities'];
    
    //var updateFacility = facilities.find(find => find._id === facility._id);

    var receieved1 = new Categories(req.session.data['received1'], req.session.data['received2'], req.session.data['received3'], 
        req.session.data['received4'], req.session.data['received5'], req.session.data['received6'], req.session.data['received7'], req.session.data['received8'], 
        req.session.data['received9'], req.session.data['received10'], req.session.data['received11'], req.session.data['received12'], req.session.data['received13'], 
        req.session.data['received14']);
    
    var reused1 = new Categories(req.session.data['reUsed1'], req.session.data['reUsed2'], req.session.data['reUsed3'], req.session.data['reUsed4'], 
        req.session.data['reUsed5'], req.session.data['reUsed6'], req.session.data['reUsed7'], req.session.data['reUsed8'], req.session.data['reUsed9'], 
        req.session.data['reUsed10'], req.session.data['reUsed11'], req.session.data['reUsed12'], req.session.data['reUsed13'], req.session.data['reUsed14']);

    var status = '';

    var evidenceNote = new EvidenceNote(req.session.data['startDate'], req.session.data['endDate'], req.session.data['pcs'], 
    req.session.data['year'], req.session.data['wasteType'], req.session.data['protocol'], receieved1, reused1, status, Math.floor(1000 + Math.random() * 9000), moment().format('DD/MM/YYYY HH:mm:ss'));

    if (req.session.data['action'] === 'submit'){
        status = 'Submitted'
        evidenceNote._submittedDate = moment('DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        evidenceNote._searchDate = moment(element._submittedDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD');
    } else {
        status = 'Draft'
    };
    
    facility._evidenceNotes.push(evidenceNote);

    res.redirect('/version-2/manage-evidence-redirect');
});

router.get('/version-2/edit-evidence-note-redirect', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));

    req.session.data['selected-evidence-note'] = evidenceNote;
    req.session.data['selectedStartDate'] = moment(evidenceNote._startDate).format('YYYY-MM-DD')
    req.session.data['selectedEndDate'] = moment(evidenceNote._endDate).format('YYYY-MM-DD')

    //console.log(req.session.data['selected-evidence-note']);
    res.redirect('/version-2/205_Edit_evidence_note_no_protocol');
});

router.get('/version-2/view-evidence-note-redirect', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));

    req.session.data['selected-evidence-note'] = evidenceNote;
    req.session.data['selectedStartDate'] = moment(evidenceNote._startDate, "DD/MM/YYYY").format("DD-MM-YYYY");
    req.session.data['selectedEndDate'] = moment(evidenceNote._endDate, "DD/MM/YYYY").format("DD-MM-YYYY");

    req.session.data['received1display'] = formatTonnage(evidenceNote._received._largeHouseholdAppliances);
    req.session.data['received2display'] = formatTonnage(evidenceNote._received._smallHouseholdAppliances);
    req.session.data['received3display'] = formatTonnage(evidenceNote._received._itAndTelecommunicationsEquipment);
    req.session.data['received4display'] = formatTonnage(evidenceNote._received._consumerEquipment);
    req.session.data['received5display'] = formatTonnage(evidenceNote._received._lightingEquipment);
    req.session.data['received6display'] = formatTonnage(evidenceNote._received._electricalAndElectronicTools);
    req.session.data['received7display'] = formatTonnage(evidenceNote._received._toysLeisureAndSportsEquipment);
    req.session.data['received8display'] = formatTonnage(evidenceNote._received._medicalDevices);
    req.session.data['received9display'] = formatTonnage(evidenceNote._received._monitoringAndControlInstruments);
    req.session.data['received10display'] = formatTonnage(evidenceNote._received._automaticDispensers);
    req.session.data['received11display'] = formatTonnage(evidenceNote._received._displayEquipment);
    req.session.data['received12display'] = formatTonnage(evidenceNote._received._appliancesContainingRefrigerants);
    req.session.data['received13display'] = formatTonnage(evidenceNote._received._gasDischargeLampsAndLedLightSources);
    req.session.data['received14display'] = formatTonnage(evidenceNote._received._photovoltaicPanel);

    req.session.data['reused1display'] = formatTonnage(evidenceNote._reused._largeHouseholdAppliances);
    req.session.data['reused2display'] = formatTonnage(evidenceNote._reused._smallHouseholdAppliances);
    req.session.data['reused3display'] = formatTonnage(evidenceNote._reused._itAndTelecommunicationsEquipment);
    req.session.data['reused4display'] = formatTonnage(evidenceNote._reused._consumerEquipment);
    req.session.data['reused5display'] = formatTonnage(evidenceNote._reused._lightingEquipment);
    req.session.data['reused6display'] = formatTonnage(evidenceNote._reused._electricalAndElectronicTools);
    req.session.data['reused7display'] = formatTonnage(evidenceNote._reused._toysLeisureAndSportsEquipment);
    req.session.data['reused8display'] = formatTonnage(evidenceNote._reused._medicalDevices);
    req.session.data['reused9display'] = formatTonnage(evidenceNote._reused._monitoringAndControlInstruments);
    req.session.data['reused10display'] = formatTonnage(evidenceNote._reused._automaticDispensers);
    req.session.data['reused11display'] = formatTonnage(evidenceNote._reused._displayEquipment);
    req.session.data['reused12display'] = formatTonnage(evidenceNote._reused._appliancesContainingRefrigerants);
    req.session.data['reused13display'] = formatTonnage(evidenceNote._reused._gasDischargeLampsAndLedLightSources);
    req.session.data['reused14display'] = formatTonnage(evidenceNote._reused._photovoltaicPanel);

    req.session.data['receivedTotal'] = CategoriesTotal(evidenceNote._received);
    req.session.data['reusedTotal'] = CategoriesTotal(evidenceNote._reused);

    res.redirect('/version-2/207a_View_evidence_note');
});

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
        return formatTonnage(total);
    }

    return formatTonnage(0);
}


function formatTonnage(val){
    if (val === undefined || val === '' || val === null) {
        return '-';
    }
    
    return parseFloat(val).toFixed(3) ;
}

router.post('/version-2/edit-evidence-note', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    
    var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.session.data['reference']));
    
    evidenceNote._startDate = req.session.data['startDate']
    evidenceNote._endDate = req.session.data['endDate'];
    evidenceNote._pcs = req.session.data['pcs'];
    evidenceNote._year = req.session.data['year'];
    evidenceNote._wasteType = req.session.data['wasteType'];
    evidenceNote._protocol = req.session.data['protocol']
    
    var receieved1 = new Categories(req.session.data['received1'], req.session.data['received2'], req.session.data['received3'], 
        req.session.data['received4'], req.session.data['received5'], req.session.data['received6'], req.session.data['received7'], req.session.data['received8'], 
        req.session.data['received9'], req.session.data['received10'], req.session.data['received11'], req.session.data['received12'], req.session.data['received13'], 
        req.session.data['received14']);
    
    var reused1 = new Categories(req.session.data['reUsed1'], req.session.data['reUsed2'], req.session.data['reUsed3'], req.session.data['reUsed4'], 
        req.session.data['reUsed5'], req.session.data['reUsed6'], req.session.data['reUsed7'], req.session.data['reUsed8'], req.session.data['reUsed9'], 
        req.session.data['reUsed10'], req.session.data['reUsed11'], req.session.data['reUsed12'], req.session.data['reUsed13'], req.session.data['reUsed14']);

    evidenceNote._received = receieved1;
    evidenceNote._reused = reused1;
    
    var status = '';
    if (req.session.data['action'] === 'submit'){
        status = 'Submitted'
        evidenceNote._submittedDate = moment().format('DD/MM/YYYY HH:mm:ss');
        evidenceNote._searchDate = moment(evidenceNote._submittedDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD');
    } else {
        status = 'Draft'
    };

    evidenceNote._status = status;

    res.redirect('/version-2/manage-evidence-redirect');
});

router.post('/version-2/paste-values-save', function (req, res) {
    req.session.data['paste-values'] = req.session.data['paste-text-area'];
    res.redirect('/version-2/' + req.session.data['paste-return-page']);
});

router.get('/version-2/copy-paste-redirect', function(req, res){
    req.session.data['paste-return-page'] = req.query['returnUrl'];
    res.redirect('/version-2/copy-paste');
});

router.post('/version-2/cancel-copy-paste-redirect', function (req, res) {
    res.redirect('/version-2/' + req.session.data['paste-return-page']);
});

module.exports = router;
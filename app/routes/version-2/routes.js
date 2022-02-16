const router = require('express').Router();
const Categories = require('../../data/categories');
const EvidenceNote = require('../../data/evidence-note');
const Facility = require('../../data/facility');
const Schemes = require('../../data/schemes');
const moment = require('../version-2/moment');

function HasValue(value) {
    if (value !== '' && value !== ' ' && value !== 0 && value != null && value !== undefined){
        return true;
    }
    return false;
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

function SetupJourney2Data(req) {
    var schemes = new Schemes();

    //period._operator._categories = new Categories('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
    //resetNonObligated(req);


    var facilities = [];
    facilities.push(new Facility('PCS 1', 1, 'WEE/PCS1234GH/PCS'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';
}

function SetupJourney3Data(req) {
    var schemes = new Schemes();

    //period._operator._categories = new Categories('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
    //resetNonObligated(req);


    var facilities = [];
    facilities.push(new Facility('PCS 1', 1, 'WEE/PCS1234GH/PCS'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';
}

function SetupV3AATFSiteData(req) {
    var facilities = [];
	
    facilities.push(new Facility('ABB Ltd Darlaston', 1, 'WEE/AB1234GH/ATF'));
    facilities.push(new Facility('ABB Ltd Woking', 2, 'WEE/AB5678GH/ATF'));
    facilities.push(new Facility('ABB Ltd Maidenhead', 3, 'WEE/AB9012GH/ATF'));

    req.session.data['facilities'] = facilities;
}

function SetupV3AatfEvidenceData(req) {
    

	// use selected facility to populate its evidence notes
    var selectedFacility = req.session.data['choose-site'];
    

/*
    var facilities = req.session.data['facilities'];
    if (!facilities || facilities.length === 0)
	{
        facilities = [];
    }
	
	facility = facilities.find(fac => fac._name === selectedFacility);
    facility._evidenceNotes = [];

    var received1 = new Categories(48, 21, 1, null, null, 14, 32, 11, null, 3, 1, null, 5, null);
    var reused1 = new Categories(2, null, 1, null, null, 3, null, 1, null, null, null, 1, 1, null);

    var received2 = new Categories(null, 56, null, 3, 1, 12, null, 80, 6, null, null, null, null, null);
    var reused2 = new Categories(null, 1, null, null, 6, 10, 2, 1, null, null, null, 1, 1, null);

    var received3 = new Categories(1, 2, null, 3, 1, 12, null, 54, 6, null, null, null, null, null);
    var reused3 = new Categories(1, 1, null, null, 6, 7, 2, 1, null, null, 5, 1, 1, null);

    facility._evidenceNotes.push(new EvidenceNote('01/01/2020', '01/01/2021', 'Waste Electrical Recycling Scheme', '2020', 'Household', 'Actual', received1, reused1, "Draft", Math.floor(1000 + Math.random() * 9000), '11/11/2021 11:32:40'));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received2, reused2, "Submitted", Math.floor(1000 + Math.random() * 9000), '01/12/2021 10:28:37'));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received3, reused3, "Returned", Math.floor(1000 + Math.random() * 9000), '01/05/2021 09:28:37'));

    var date = new Date(2020, 05, 1, 9, 4, 5);
    var date2 = new Date(2021, 01, 4, 10, 4, 5);
    facility._evidenceNotes[1]._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
    facility._evidenceNotes[2]._submittedDate = moment(date2, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');

    req.session.data['facilities']  = facilities;
    req.session.data['chosen-facility'] = facility; 

    console.log(req.session.data['chosen-facility']._name);
*/	
}



// ------------------------------------------------------------------------------------
// VERSION 2 - Journey 1
// ------------------------------------------------------------------------------------

router.get('/version-2/journey1/index', function(req, res)
{
	req.session.data['index-action-link'] = '/version-2/201_Choose_activity_AATF';
    res.redirect('/version-2/index');
});

router.post('/version-2/choose-activity-redirect', function (req, res) 
{
    const activity = req.session.data['choose-activity'];

	if ( activity === '7' )
	{
        SetupData(req);
        res.redirect('/version-2/202_Choose_site');
	}
	
	if ( activity === '12' )
	{
		SetupJourney2Data(req);
		res.redirect('/version-2/209_Manage_evidence');
	}
	
	if ( activity === '13' )
	{
		SetupJourney3Data(req);
		res.redirect('/version-2/214_Manage_evidence_tabs');
	}
    
    res.redirect('/version-2/index');
});

router.post('/version-2/choose-site-redirect', function(req, res){
    var facilities = req.session.data['facilities'];
    var selectedFacility = req.session.data['choose-site'];

    if (!facilities || facilities.length === 0){
        facilities = [];
    }

    facility = facilities.find(fac => fac._name === selectedFacility);
    facility._evidenceNotes = [];

    var receieved1 = new Categories(48, 21, 1, null, null, 14, 32, 11, null, 3, 1, null, 5, null);
    var reused1 = new Categories(2, null, 1, null, null, 3, null, 1, null, null, null, 1, 1, null);

    var receieved2 = new Categories(null, 56, null, 3, 1, 12, null, 80, 6, null, null, null, null, null);
    var reused2 = new Categories(null, 1, null, null, 6, 10, 2, 1, null, null, null, 1, 1, null);

    var receieved3 = new Categories(1, 2, null, 3, 1, 12, null, 54, 6, null, null, null, null, null);
    var reused3 = new Categories(1, 1, null, null, 6, 7, 2, 1, null, null, 5, 1, 1, null);

    facility._evidenceNotes.push(new EvidenceNote('01/01/2020', '01/01/2021', 'Waste Electrical Recycling Scheme', '2020', 'Household', 'Actual', receieved1, reused1, "Draft", Math.floor(1000 + Math.random() * 9000), '11/11/2021 11:32:40'));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', receieved2, reused2, "Submitted", Math.floor(1000 + Math.random() * 9000), '01/12/2021 10:28:37'));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', receieved3, reused3, "Returned", Math.floor(1000 + Math.random() * 9000), '01/05/2021 09:28:37'));

    var date = new Date(2020, 05, 1, 9, 4, 5);
    var date2 = new Date(2021, 01, 4, 10, 4, 5);
    facility._evidenceNotes[1]._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
    facility._evidenceNotes[2]._submittedDate = moment(date2, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
    
    req.session.data['facilities']  = facilities;
    req.session.data['chosen-facility'] = facility; 

    res.redirect('/version-2/manage-evidence-redirect');
});

router.get('/version-2/manage-evidence-redirect', function(req, res){
    var facilities = req.session.data['facilities'];
    var selectedFacility = req.session.data['choose-site'];


for(var i = 0; i < facilities.length; i++){
        var facility = facilities[i];
        if (facility._evidenceNotes){
            for (j = 0; j < facility._evidenceNotes.length; j++){
                var evidenceNote = facility._evidenceNotes[j];
                
                evidenceNote._categoryFilter = [];
                if (HasValue(evidenceNote._received._largeHouseholdAppliances) || HasValue(evidenceNote._reused._largeHouseholdAppliances)){
                    evidenceNote._categoryFilter.push('1');
                }
                if (HasValue(evidenceNote._received._smallHouseholdAppliances) || HasValue(evidenceNote._reused._smallHouseholdAppliances)){
                    evidenceNote._categoryFilter.push('2');
                }
                if (HasValue(evidenceNote._received._itAndTelecommunicationsEquipment) || HasValue(evidenceNote._reused._itAndTelecommunicationsEquipment)){
                    evidenceNote._categoryFilter.push('3');
                }
                if (HasValue(evidenceNote._received._consumerEquipment) || HasValue(evidenceNote._reused._consumerEquipment)){
                    evidenceNote._categoryFilter.push('4');
                }
                if (HasValue(evidenceNote._received._lightingEquipment) || HasValue(evidenceNote._reused._lightingEquipment)){
                    evidenceNote._categoryFilter.push('5');
                }
                if (HasValue(evidenceNote._received._electricalAndElectronicTools) || HasValue(evidenceNote._reused._electricalAndElectronicTools)){
                    evidenceNote._categoryFilter.push('6');
                }
                if (HasValue(evidenceNote._received._toysLeisureAndSportsEquipment) || HasValue(evidenceNote._reused._toysLeisureAndSportsEquipment)){
                    evidenceNote._categoryFilter.push('7');
                }
                if (HasValue(evidenceNote._received._medicalDevices) || HasValue(evidenceNote._reused._medicalDevices)){
                    evidenceNote._categoryFilter.push('8');
                }
                if (HasValue(evidenceNote._received._monitoringAndControlInstruments) || HasValue(evidenceNote._reused._monitoringAndControlInstruments)){
                    evidenceNote._categoryFilter.push('9');
                }
                if (HasValue(evidenceNote._received._automaticDispensers) || HasValue(evidenceNote._reused._automaticDispensers)){
                    evidenceNote._categoryFilter.push('10');
                }
                if (HasValue(evidenceNote._received._appliancesContainingRefrigerants) || HasValue(evidenceNote._reused._appliancesContainingRefrigerants)){
                    evidenceNote._categoryFilter.push('12');
                }
                if (HasValue(evidenceNote._received._gasDischargeLampsAndLedLightSources) || HasValue(evidenceNote._reused._gasDischargeLampsAndLedLightSources)){
                    evidenceNote._categoryFilter.push('13');
                }
                if (HasValue(evidenceNote._received._displayEquipment) || HasValue(evidenceNote._reused._displayEquipment)){
                    evidenceNote._categoryFilter.push('11');
                }
                if (HasValue(evidenceNote._received._photovoltaicPanel) || HasValue(evidenceNote._reused._photovoltaicPanel)){
                    evidenceNote._categoryFilter.push('14');
                }

                evidenceNote._categoryFilterString = evidenceNote._categoryFilter.join();
            }
        }
    }
	
	 req.session.data['facilities']  = facilities;
    req.session.data['chosen-facility'] = facility; 
    res.redirect('/version-2/203_Manage_evidence');
});

router.post('/version-2/create-evidence-note-redirect', function(req, res){
    req.session.data['paste-values'] = ''; 
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
    var startDate = '';
    var endDate = '';
    var pcs = '';
    var year = '';
    var protocol = '';
    var wasteType = '';

    if (req.session.data['startDate']!==''){
        startDate = req.session.data['startDate'];
    }
    if (req.session.data['endDate']!==''){
        endDate = req.session.data['endDate'];
    }
    if (req.session.data['pcs']!=='Recipient name'){
        pcs = req.session.data['pcs'];
    }
    if (req.session.data['year']!=='0'){
        year = req.session.data['year'];
    }
    if (req.session.data['protocol']!=='0'){
        protocol = req.session.data['protocol'];
    }
    
    if (req.session.data['wasteType']!=='0'){
        wasteType = req.session.data['wasteType'];
    }
    var evidenceNote = new EvidenceNote(startDate, endDate, pcs, 
        year, wasteType, protocol, receieved1, reused1, status, Math.floor(1000 + Math.random() * 9000), moment().format('DD/MM/YYYY HH:mm:ss'));

    if (req.session.data['action'] === 'submit'){
        status = 'Submitted'
        var date = new Date();
        evidenceNote._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        evidenceNote._searchDate = moment(evidenceNote._submittedDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD');
    } else {
        status = 'Draft'
    };
    evidenceNote._status = status;
    facility._evidenceNotes.push(evidenceNote);

    res.redirect('/version-2/manage-evidence-redirect');
});

router.get('/version-2/edit-evidence-note-redirect', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));

    var pcs = '';
    if (evidenceNote._pcs === ''){
        pcs = 'Recipient name';
    }
    else{
        pcs = evidenceNote._pcs;
    }
    req.session.data['selected-evidence-note'] = evidenceNote;
    req.session.data['selectedStartDate'] = moment(evidenceNote._startDate).format('YYYY-MM-DD')
    req.session.data['selectedEndDate'] = moment(evidenceNote._endDate).format('YYYY-MM-DD')
    req.session.data['selectedpcs'] = pcs;
    
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

    res.redirect('/version-2/207_View_evidence_note');
});

router.post('/version-2/edit-evidence-note', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    
    var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.session.data['reference']));
    
    var startDate = '';
    var endDate = '';
    var pcs = '';
    var year = '';
    var protocol = '';
    var wasteType = '';

    if (req.session.data['startDate']!==''){
        startDate = req.session.data['startDate'];
    }
    if (req.session.data['endDate']!==''){
        endDate = req.session.data['endDate'];
    }
    if (req.session.data['pcs']!=='Recipient name'){
        pcs = req.session.data['pcs'];
    }
    if (req.session.data['year']!=='0'){
        year = req.session.data['year'];
    }
    if (req.session.data['protocol']!=='0'){
        protocol = req.session.data['protocol'];
    }
    if (req.session.data['wasteType']!=='0'){
        wasteType = req.session.data['wasteType'];
    }

    evidenceNote._startDate = startDate;
    evidenceNote._endDate = endDate;
    evidenceNote._pcs = pcs;
    evidenceNote._year = year;
    evidenceNote._wasteType = wasteType;
    evidenceNote._protocol = protocol;
    
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
        var date = new Date();
        evidenceNote._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        evidenceNote._searchDate = moment(evidenceNote._submittedDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD');
        evidenceNote._status = status;
    }

    

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

router.get('/version-2/journey1/view-submitted-evidence-note', function(req, res) {
	
	var facility = new Facility('ABB Ltd Woking', 2, 'WEE/AB5678GH/ATF');
	
	facility._evidenceNotes = [];

    var received1 = new Categories(48, 21, 1, null, null, 14, 32, 11, null, 3, 1, null, 5, null);
    var reused1 = new Categories(2, null, 1, null, null, 3, null, 1, null, null, null, 1, 1, null);

    var received2 = new Categories(null, 56, null, 3, 1, 12, null, 80, 6, null, null, null, null, null);
    var reused2 = new Categories(null, 1, null, null, 6, 10, 2, 1, null, null, null, 1, 1, null);

    var received3 = new Categories(1, 2, null, 3, 1, 12, null, 54, 6, null, null, null, null, null);
    var reused3 = new Categories(1, 1, null, null, 6, 7, 2, 1, null, null, 5, 1, 1, null);

    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received2, reused2, "Submitted", 1389, '01/12/2021 10:28:37'));
    facility._evidenceNotes[0]._submittedDate = moment(new Date(2020, 05, 1, 9, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');

    req.session.data['chosen-facility'] = facility; 
	
	res.redirect('/version-2/view-evidence-note-redirect?id=1389');
});

router.get('/version-2/journey1/view-draft-evidence-note', function(req, res) {
	
	var facility = new Facility('ABB Ltd Woking', 2, 'WEE/AB5678GH/ATF');
	
	facility._evidenceNotes = [];

    var received1 = new Categories(48, 21, 1, null, null, 14, 32, 11, null, 3, 1, null, 5, null);
    var reused1 = new Categories(2, null, 1, null, null, 3, null, 1, null, null, null, 1, 1, null);

    var received2 = new Categories(null, 56, null, 3, 1, 12, null, 80, 6, null, null, null, null, null);
    var reused2 = new Categories(null, 1, null, null, 6, 10, 2, 1, null, null, null, 1, 1, null);

    var received3 = new Categories(1, 2, null, 3, 1, 12, null, 54, 6, null, null, null, null, null);
    var reused3 = new Categories(1, 1, null, null, 6, 7, 2, 1, null, null, 5, 1, 1, null);

    facility._evidenceNotes.push(new EvidenceNote('01/01/2020', '01/01/2021', 'Waste Electrical Recycling Scheme', '2020', 'Household', 'Actual', received1, reused1, "Draft", 1389, '11/11/2021 11:32:40'));
    facility._evidenceNotes[0]._submittedDate = moment(new Date(2021, 01, 4, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');

    req.session.data['chosen-facility'] = facility; 
	
	res.redirect('/version-2/view-evidence-note-redirect?id=1389');
});




// ------------------------------------------------------------------------------------
// VERSION 2 - JOURNEY 2
// ------------------------------------------------------------------------------------

router.get('/version-2/journey2/index', function(req, res)
{
	req.session.data['index-action-link'] = '/version-2/208_Choose_activity_PCS_journey_2';
    res.redirect('/version-2/index');
});

router.get('/version-2/journey-2/review-evidence-note-redirect', function(req, res)
{
	//var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));
	req.session.data['evidence-number'] = req.query['id'];

    res.redirect('/version-2/210_Review_evidence_note');
});

router.post('/version-2/journey-2/choose-status-redirect', function (req, res) {
    
    const status = req.session.data['choose-status'];
	const evidenceNumber  = req.session.data['evidence-number'];

	if ( status === '1' )
	{
		req.session.data['chosen-status-' + evidenceNumber] = 'Approved';
	}
	
	if ( status === '2' )
	{
        req.session.data['chosen-status-' + evidenceNumber] = 'Rejected';
		//req.session.data['reject-return-reason'] = req.session.data['reject-return-reason']
		
	}
 	
	if ( status === '3' )
	{
        req.session.data['chosen-status-' + evidenceNumber] = 'Returned';
		//req.session.data['reject-return-reason'] = req.form['reject-return-reason']
		
	}
   
	res.redirect('/version-2/209_Manage_evidence');
});




// ------------------------------------------------------------------------------------
// VERSION 2 - JOURNEY 3
// ------------------------------------------------------------------------------------

router.get('/version-2/journey3/index', function(req, res)
{
	req.session.data['index-action-link'] = '/version-2/208_Choose_activity_PCS_journey_3';
    res.redirect('/version-2/index');
});

router.get('/version-2/journey-3/215-Transfer-evidence-note', function(req, res)
{
	//var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));
	//req.session.data['evidence-number'] = req.query['id'];

    res.redirect('/version-2/215_Transfer_evidence_note');
});

router.get('/version-2/journey-3/216-Selected-evidence-note', function(req, res)
{
	//var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));
	//req.session.data['evidence-number'] = req.query['id'];

    res.redirect('/version-2/216_Selected_evidence_note');
});

router.get('/version-2/journey-3/217-Transfer-note-init', function(req, res)
{
	// -----------------------------------
	// Called from the versions-home page
	// -----------------------------------
	
	//var evidenceNote = facility._evidenceNotes.find(find => find._reference === 1444);
	//data['selected-evidence-note'] = evidenceNote;

    res.redirect('/version-2/217_Transfer_note');
});

router.get('/version-2/journey-3/217-Transfer-note', function(req, res)
{
	// -----------------------------------
	// Called from one page on journey 3
	// -----------------------------------
	//var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));
	//req.session.data['evidence-number'] = req.query['id'];

    res.redirect('/version-2/217_Transfer_note');
});




// ------------------------------------------------------------------------------------
// VERSION 3 - AATF Journey
// ------------------------------------------------------------------------------------

function CreateFacilityWithEvidenceNotes(req)
{
    var selectedFacility = req.session.data['choose-site'];
	var facilities = req.session.data['facilities'];
    
	facility = facilities.find(fac => fac._name === selectedFacility);

    if (facility._evidenceNotes.length === 0){
        facility._evidenceNotes = [];

        // [0..4] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'ERP UK', '2022', 'Household', 'Actual', received, reused, "Submitted", 1389, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'ERP UK', '2022', 'Household', 'Actual', received, reused, "Approved", 1211, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'ERP UK', '2022', 'Household', 'Actual', received, reused, "Rejected", 1255, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'ERP UK', '2022', 'Household', 'Actual', received, reused, "Returned", 1329, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'ERP UK', '2022', 'Household', 'Actual', received, reused, "Draft", 1321, '11/11/2021 11:32:40'));
    
    
        // [5..9] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Draft", 1150, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1189, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Approved", 1367, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Rejected", 1890, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Draft", 1391, '11/11/2021 11:32:40'));
    
    
        // [10..14] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Submitted", 1122, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Approved", 1379, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Rejected", 1654, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Draft", 1288, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1659, '11/11/2021 11:32:40'));
        
    
        // [15..19] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Submitted", 1122, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Approved", 1387, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Rejected", 1654, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Draft", 1366, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1659, '11/11/2021 11:32:40'));
    
        // [20..24] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Submitted", 1122, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1322, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1654, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Draft", 1381, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1659, '11/11/2021 11:32:40'));
    
        
        // 2021
    
        // [25..29] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Submitted", 1352, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Draft", 1334, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Submitted", 1377, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Approved", 1324, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Rejected", 1317, '11/11/2021 11:32:40'));
    
        // [30..34] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Submitted", 1259, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Submitted", 1267, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Rejected", 1216, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Draft", 1344, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Approved", 1351, '11/11/2021 11:32:40'));
    
        // [35..39] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Approved", 1488, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Approved", 1469, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Submitted", 1472, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Submitted", 1429, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Draft", 1499, '11/11/2021 11:32:40'));
    
        // [40..44] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Approved", 1481, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Approved", 1461, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Submitted", 1471, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Submitted", 1422, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Draft", 1425, '11/11/2021 11:32:40'));
    
        // [45..49] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Approved", 1581, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Approved", 1561, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Submitted", 1571, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Submitted", 1522, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Draft", 1525, '11/11/2021 11:32:40'));
    
        // [50..54] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Approved", 1688, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Approved", 1665, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Recycling Lives', '2021', 'Household', 'Actual', received, reused, "Submitted", 1676, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Epic', '2021', 'Household', 'Actual', received, reused, "Submitted", 1623, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '31/01/2021', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', received, reused, "Draft", 1627, '11/11/2021 11:32:40'));
    
        
        
        
        // ------------------------------------------------------------------------------------------
        // Submitted evidence notes 
        // facility._evidenceNotes[0]._submittedDate = moment(new Date(2022, 01, 4, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        // ------------------------------------------------------------------------------------------
        
        facility._evidenceNotes[0]._submittedDate = moment(new Date(2022, 01, 4, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[1]._submittedDate = moment(new Date(2022, 01, 4, 11, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[2]._submittedDate = moment(new Date(2022, 01, 4, 12, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[3]._submittedDate = moment(new Date(2022, 01, 4, 13, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
        facility._evidenceNotes[6]._submittedDate = moment(new Date(2022, 01, 5, 14, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[7]._submittedDate = moment(new Date(2022, 01, 5, 15, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[8]._submittedDate = moment(new Date(2022, 01, 5, 16, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
        facility._evidenceNotes[10]._submittedDate = moment(new Date(2022, 01, 6, 17, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[11]._submittedDate = moment(new Date(2022, 01, 6, 18, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[12]._submittedDate = moment(new Date(2022, 01, 6, 19, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
        facility._evidenceNotes[15]._submittedDate = moment(new Date(2022, 01, 7, 20, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[16]._submittedDate = moment(new Date(2022, 01, 7, 21, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[17]._submittedDate = moment(new Date(2022, 01, 7, 22, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
    
        facility._evidenceNotes[20]._submittedDate = moment(new Date(2022, 01, 8, 30, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[21]._submittedDate = moment(new Date(2022, 01, 8, 30, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[22]._submittedDate = moment(new Date(2022, 01, 8, 30, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
        facility._evidenceNotes[25]._submittedDate = moment(new Date(2021, 01, 9, 20, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[27]._submittedDate = moment(new Date(2021, 01, 9, 20, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[30]._submittedDate = moment(new Date(2021, 01, 9, 20, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
        facility._evidenceNotes[31]._submittedDate = moment(new Date(2021, 01, 8, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[37]._submittedDate = moment(new Date(2021, 01, 8, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[38]._submittedDate = moment(new Date(2021, 01, 8, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
        facility._evidenceNotes[42]._submittedDate = moment(new Date(2021, 01, 7, 11, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[43]._submittedDate = moment(new Date(2021, 01, 7, 12, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[47]._submittedDate = moment(new Date(2021, 01, 7, 13, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[48]._submittedDate = moment(new Date(2021, 01, 7, 14, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
        facility._evidenceNotes[52]._submittedDate = moment(new Date(2021, 01, 6, 15, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[53]._submittedDate = moment(new Date(2021, 01, 6, 16, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
    }
	//var facility = new Facility('ABB Ltd Woking', 2, 'WEE/AB5678GH/ATF');
	
	return facility;
}

router.get('/version-2/aatf-journey/index', function(req, res)
{
	req.session.data['index-action-link'] = '/version-2/aatf-journey/301-choose-activity-aatf';
    res.redirect('/version-2/index');
});

router.get('/version-2/aatf-journey/301-choose-activity-aatf', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'choose activity';
    req.session.data['facilities'] = [];
    req.session.data['schemes'] = new Schemes();
    req.session.data['paste-values'] = '';
    res.redirect('/version-2/301_Choose_activity_AATF');
});

router.get('/version-2/aatf-journey/302-choose-site', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'choose site';
    var schemes = new Schemes();
    var facilities = [];
    facilities.push(new Facility('ABB Ltd Darlaston', 1, 'WEE/AB1234GH/ATF'));
    facilities.push(new Facility('ABB Ltd Woking', 2, 'WEE/AB5678GH/ATF'));
    facilities.push(new Facility('ABB Ltd Maidenhead', 3, 'WEE/AB9012GH/ATF'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';

    res.redirect('/version-2/302_Choose_site');
});

/*
router.get('/version-2/aatf-journey/303-manage-evidence', function(req, res)
{
	// must pick-up the chosen facility
    var facilities = req.session.data['facilities'];
    var selectedFacility = req.session.data['choose-site'];

    if (!facilities || facilities.length === 0){
        facilities = [];
    }

    facility = facilities.find(fac => fac._name === selectedFacility);
    facility._evidenceNotes = [];

    var receieved1 = new Categories(48, 21, 1, null, null, 14, 32, 11, null, 3, 1, null, 5, null);
    var reused1 = new Categories(2, null, 1, null, null, 3, null, 1, null, null, null, 1, 1, null);

    var receieved2 = new Categories(null, 56, null, 3, 1, 12, null, 80, 6, null, null, null, null, null);
    var reused2 = new Categories(null, 1, null, null, 6, 10, 2, 1, null, null, null, 1, 1, null);

    var receieved3 = new Categories(1, 2, null, 3, 1, 12, null, 54, 6, null, null, null, null, null);
    var reused3 = new Categories(1, 1, null, null, 6, 7, 2, 1, null, null, 5, 1, 1, null);

    facility._evidenceNotes.push(new EvidenceNote('01/01/2020', '01/01/2021', 'Waste Electrical Recycling Scheme', '2020', 'Household', 'Actual', receieved1, reused1, "Draft", Math.floor(1000 + Math.random() * 9000), '11/11/2021 11:32:40'));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', receieved2, reused2, "Submitted", Math.floor(1000 + Math.random() * 9000), '01/12/2021 10:28:37'));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Scheme', '2021', 'Household', 'Actual', receieved3, reused3, "Returned", Math.floor(1000 + Math.random() * 9000), '01/05/2021 09:28:37'));

    var date = new Date(2020, 05, 1, 9, 4, 5);
    var date2 = new Date(2021, 01, 4, 10, 4, 5);
    facility._evidenceNotes[1]._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
    facility._evidenceNotes[2]._submittedDate = moment(date2, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
    
    req.session.data['facilities']  = facilities;
    req.session.data['chosen-facility'] = facility; 
	
    res.redirect('/version-2/aatf-journey/303-manage-evidence-init');
});
*/


router.get('/version-2/aatf-journey/303-manage-evidence-redirect', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
	var facility = req.session.data['chosen-facility'];


	// Sort by Status then Submitted Date 
	// Draft first then submitted in descending date order
	// Draft, Rejected, Approved, Submitted
	// WARNING: this sort must be done before pagination (lower down)
	for ( var o = 0; o < facility._evidenceNotes.length; o++ )
	{
		var order = facility._evidenceNotes[o]._sortOrder;
		var status = facility._evidenceNotes[o]._status;
		
		if ( status === 'Draft' )
		{
			// draft must be at the top of the list
			facility._evidenceNotes[o]._sortOrder = 0;
		}
		if ( status === 'Submitted' )
		{
			// submitted notes come second on the list
			facility._evidenceNotes[o]._sortOrder = 1;
		}
		if ( status !== 'Draft' && status !== 'Submitted' )
		{
			// other types of notes will follow in unsorted order
			facility._evidenceNotes[o]._sortOrder = 2;
		}
		
		
	}
	
	//facility._evidenceNotes.sort((a, b) => (a._sortOrder > b._sortOrder) ? 1 : -1);
	// sort over 2 columns:  submitted date in descending order
	facility._evidenceNotes.sort((a, b) => (a._sortOrder > b._sortOrder) ? 1 : (a._sortOrder === b._sortOrder) ? ((a._submittedDate > b._submittedDate) ? 1 : -1) : -1 );
	
	
	// WARNING: make sure pagination is applied to sorted list first.
	// page size is hard-coded but should be stored in session is changed by UI
	var pageSize = 10;
	
	for ( var v = 0; v < facility._evidenceNotes.length; v++ )
	{
		facility._evidenceNotes[v]._isVisible = false;
		
		if ( v < pageSize )
		{
			facility._evidenceNotes[v]._isVisible = true;
		}
	}

	// work out totals for first tab
	var totalApprovedNotes = 0;
	var totalSubmittedNotes = 0;
	for(var j = 0; j < facility._evidenceNotes.length; j++)
	{
		//if ( facility._evidenceNotes[j]._status === 'Approved' && facility._evidenceNotes[j]._year == '2022' ) totalApprovedNotes++;
		//if ( facility._evidenceNotes[j]._status === 'Submitted' && facility._evidenceNotes[j]._year == '2022' ) totalSubmittedNotes++;
		if ( facility._evidenceNotes[j]._status === 'Approved' ) totalApprovedNotes++;
		if ( facility._evidenceNotes[j]._status === 'Submitted' ) totalSubmittedNotes++;
	}
    req.session.data['total-approved-notes'] = totalApprovedNotes; 
    req.session.data['total-submitted-notes'] = totalSubmittedNotes;
	
	//console.log(`sort approved: ${totalApprovedNotes} --- submitted: ${totalSubmittedNotes}`);

    req.session.data['chosen-facility'] = facility; 
	
    res.redirect('/version-2/303_Manage_evidence');
});

router.get('/version-2/aatf-journey/303-manage-evidence-pdf', function(req, res)
{
	// Print to PDF code should be here
	// ...
	
    res.redirect('/version-2/307_PDF_printed_dialog');
});

router.get('/version-2/aatf-journey/305-create-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'create evidence note';
    res.redirect('/version-2/305_Create_evidence_note');
});

router.get('/version-2/aatf-journey/307-view-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'view evidence note';
	req.session.data['evidence-number'] = req.query['id'];
	req.session.data['status'] = req.query['status'];

    res.redirect('/version-2/307_View_evidence_note');
});

router.get('/version-2/aatf-journey/305-edit-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'edit evidence note';
	req.session.data['evidence-number'] = req.query['id'];
	
	var facility = req.session.data['chosen-facility'];
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == req.query['id']);
	
	//req.session.data['selected-evidence-number'] = req.query['id'];
	//req.session.data['selected-evidence-number'] = req.session.data['selected-evidence-note']._reference;
	
    res.redirect('/version-2/305_Edit_evidence_note');
});

router.post('/version-2/aatf-journey/305-save-create-evidence-note', function(req, res){

    var facility = req.session.data['chosen-facility']; 
    var facilities = req.session.data['facilities'];
	//console.log('facilities length: ' + facilities.length);
    
    var receieved1 = new Categories(req.session.data['received1'], req.session.data['received2'], req.session.data['received3'], 
        req.session.data['received4'], req.session.data['received5'], req.session.data['received6'], req.session.data['received7'], req.session.data['received8'], 
        req.session.data['received9'], req.session.data['received10'], req.session.data['received11'], req.session.data['received12'], req.session.data['received13'], 
        req.session.data['received14']);
    
    var reused1 = new Categories(req.session.data['reUsed1'], req.session.data['reUsed2'], req.session.data['reUsed3'], req.session.data['reUsed4'], 
        req.session.data['reUsed5'], req.session.data['reUsed6'], req.session.data['reUsed7'], req.session.data['reUsed8'], req.session.data['reUsed9'], 
        req.session.data['reUsed10'], req.session.data['reUsed11'], req.session.data['reUsed12'], req.session.data['reUsed13'], req.session.data['reUsed14']);

    var status = '';
    var startDate = '';
    var endDate = '';
    var pcs = '';
    var year = '';
    var protocol = '';
    var wasteType = '';

    if (req.session.data['startDate']!==''){
        startDate = req.session.data['startDate'];
    }
    if (req.session.data['endDate']!==''){
        endDate = req.session.data['endDate'];
    }
    if (req.session.data['pcs']!=='Recipient name'){
        pcs = req.session.data['pcs'];
    }
    if (req.session.data['year']!=='0'){
        year = req.session.data['year'];
    }
    if (req.session.data['protocol']!=='0'){
        protocol = req.session.data['protocol'];
    }
    
    if (req.session.data['wasteType']!=='0'){
        wasteType = req.session.data['wasteType'];
    }
    var evidenceNote = new EvidenceNote(startDate, endDate, pcs, 
        year, wasteType, protocol, receieved1, reused1, status, Math.floor(1000 + Math.random() * 9000), moment().format('DD/MM/YYYY HH:mm:ss'));

    if (req.session.data['action'] === 'submit'){
        status = 'Submitted'
        var date = new Date();
        evidenceNote._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        evidenceNote._searchDate = moment(evidenceNote._submittedDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD');
    } else {
        status = 'Draft'
    };
    evidenceNote._status = status;
    facility._evidenceNotes.push(evidenceNote);

    res.redirect('/version-2/aatf-journey/303-manage-evidence-redirect');
});



router.post('/version-2/aatf-journey/305-save-evidence-note', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    var facilities = req.session.data['facilities'];
	var evidenceNumber = req.session.data['selected-evidence-note']._reference;
    
    var received1 = new Categories(req.session.data['received1'], req.session.data['received2'], req.session.data['received3'], 
        req.session.data['received4'], req.session.data['received5'], req.session.data['received6'], req.session.data['received7'], req.session.data['received8'], 
        req.session.data['received9'], req.session.data['received10'], req.session.data['received11'], req.session.data['received12'], req.session.data['received13'], 
        req.session.data['received14']);
    
    var reused1 = new Categories(req.session.data['reUsed1'], req.session.data['reUsed2'], req.session.data['reUsed3'], req.session.data['reUsed4'], 
        req.session.data['reUsed5'], req.session.data['reUsed6'], req.session.data['reUsed7'], req.session.data['reUsed8'], req.session.data['reUsed9'], 
        req.session.data['reUsed10'], req.session.data['reUsed11'], req.session.data['reUsed12'], req.session.data['reUsed13'], req.session.data['reUsed14']);

    var status = '';
    var startDate = '';
    var endDate = '';
    var pcs = '';
    var year = '';
    var protocol = '';
    var wasteType = '';

    if (req.session.data['startDate']!==''){
        startDate = req.session.data['startDate'];
    }
    if (req.session.data['endDate']!==''){
        endDate = req.session.data['endDate'];
    }
    if (req.session.data['pcs']!=='Recipient name'){
        pcs = req.session.data['pcs'];
    }
    if (req.session.data['year']!=='0'){
        year = req.session.data['year'];
    }
    if (req.session.data['protocol']!=='0'){
        protocol = req.session.data['protocol'];
    }
    
    if (req.session.data['wasteType']!=='0'){
        wasteType = req.session.data['wasteType'];
    }
    var evidenceNote = new EvidenceNote(startDate, endDate, pcs, 
        year, wasteType, protocol, received1, reused1, status, evidenceNumber, moment().format('DD/MM/YYYY HH:mm:ss'));

    if (req.session.data['action'] === 'submit'){
        status = 'Submitted'
        var date = new Date();
        evidenceNote._submittedDate = moment(date, 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        evidenceNote._searchDate = moment(evidenceNote._submittedDate, 'DD/MM/YYYY HH:mm:ss').format('YYYY-MM-DD');
    } else {
        status = 'Draft'
    };
    evidenceNote._status = status;
    facility._evidenceNotes.push(evidenceNote);

    
    res.redirect('/version-2/aatf-journey/303-manage-evidence');
});

router.post('/version-2/302-choose-site-redirect', function(req, res){
    
    var facility = CreateFacilityWithEvidenceNotes(req);
    req.session.data['chosen-facility'] = facility; 

    res.redirect('/version-2/aatf-journey/303-manage-evidence-redirect');
});

router.get('/version-2/305-edit-evidence-note-redirect', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));

    var pcs = '';
    if (evidenceNote._pcs === ''){
        pcs = 'Recipient name';
    }
    else{
        pcs = evidenceNote._pcs;
    }
    req.session.data['selected-evidence-note'] = evidenceNote;
    req.session.data['selectedStartDate'] = moment(evidenceNote._startDate).format('YYYY-MM-DD')
    req.session.data['selectedEndDate'] = moment(evidenceNote._endDate).format('YYYY-MM-DD')
    req.session.data['selectedpcs'] = pcs;
    
    //console.log(req.session.data['selected-evidence-note']);
    res.redirect('/version-2/305_Edit_evidence_note');
});

module.exports = router;

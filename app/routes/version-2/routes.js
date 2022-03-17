
const router = require('express').Router();
const Facility = require('../../data/facility');
const Schemes = require('../../data/schemes');
const moment = require('../version-2/moment');
const Categories = require('../../data/categories');
const CategoryItems = require('../../data/category-items');
const EvidenceNote = require('../../data/evidence-note');
const TransferAatf = require('../../data/transferAatf');
const TransferAatfCategory = require('../../data/transferAatfCategory');
const TransferAatfNote = require('../../data/transferAatfNotes');
const TransferCategory = require('../../data/transferCategory');
const TransferNote = require('../../data/transferNote');


function getMax( numbers )
{
	var maximum = 0;
	
	for ( var n = 0; n < numbers.length; n++ )
	{
		if ( numbers[n] > maximum )
		{
			maximum = numbers[n];
		}
	}
	
	return maximum;
}

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

function formatTonnage(val)
{
    if (val === undefined || val === '' || val === null) 
	{
        return '-';
    }
    
    return parseFloat(val).toFixed(3) ;
}

function separator(numb) 
{
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

function formatTotalTonnage(tonnes)
{
	// we expect a floating point number
    if (tonnes == undefined || tonnes == '' || tonnes == null) 
	{
        return '-';
    }
    
    return separator(tonnes);
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

function formatWith1000Separator(number)
{
	return separator(number);
}

function CreatePcsSelectedFacilityWithEvidenceNotes(req)
{
    var facility = new Facility('Recycling Team Ltd', 1, 'WEE/AB5678GH/PCS');

	facility._evidenceNotes = [];

	// [0..4] -------------------------------------------
	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'M.D.J. Light Brothers Ltd - Greystone Quarry', '2022', 'Household', 'Actual', 150.025, 10.001, "Submitted", 1399, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/02/2022', '11/02/2022', 'Environcom (North West) Ltd', '2022', 'Household', 'Actual', 180.005, 10.001, "Submitted", 1211, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/03/2022', '31/03/2022', 'Intelligent Waste Management Ltd', '2022', 'Household', 'Actual', 210.110, 10.001, "Approved", 1255, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/04/2022', '31/04/2022', 'ERP UK', '2022', 'Household', 'Actual', 120.225, 10.001, "Rejected", 1329, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/05/2022', '31/05/2022', 'ERP UK', '2022', 'Household', 'Actual', 190.120, 10.001, "Draft", 1321, '11/11/2021 11:32:40'));
    
    
	// [5..9] -------------------------------------------
	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 140.265, 20.002, "Void", 1150, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('09/02/2022', '12/02/2022', 'M.D.J. Light Brothers Ltd - Greystone Quarry', '2022', 'Household', 'Actual', 130.256, 20.002, "Approved", 1189, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives Ltd (Recycling Park)', '2022', 'Household', 'Actual', 240.668, 10.002, "Returned", 1367, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', 350.256, 2.002, "Submitted", 1890, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('08/02/2022', '17/02/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 560.111, 2.002, "Approved", 1391, '11/11/2021 11:32:40'));
    
    
	// [10..12] -------------------------------------------
	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 140.265, 20.002, "Rejected", 1610, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('09/02/2022', '12/02/2022', 'M.D.J. Light Brothers Ltd - Greystone Quarry', '2022', 'Household', 'Actual', 130.256, 20.002, "Approved", 1182, '11/11/2021 11:32:40'));

	received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
	reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
	facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives Ltd (Recycling Park)', '2022', 'Household', 'Actual', 240.668, 10.002, "Returned", 1165, '11/11/2021 11:32:40'));

        
	// -----------------------------------------------------------------------------------------------------------------------------------------
	// Submitted evidence notes 
	// -----------------------------------------------------------------------------------------------------------------------------------------
	
	// Submitted notes
	facility._evidenceNotes[0]._submittedDate = moment(new Date(2022, 01, 4, 10, 10, 6), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
	facility._evidenceNotes[1]._submittedDate = moment(new Date(2022, 02, 5, 11, 20, 7), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
	facility._evidenceNotes[8]._submittedDate = moment(new Date(2022, 03, 7, 13, 15, 8), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');

	// Rejected notes
	facility._evidenceNotes[3]._rejectedDate = moment(new Date(2022, 01, 8, 15, 16, 7), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
	facility._evidenceNotes[10]._rejectedDate = moment(new Date(2022, 01, 12, 16, 10, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
	
	// Transferred notes
	facility._evidenceNotes[2]._isTransferred = true;  // 1255
	facility._evidenceNotes[3]._isTransferred = true;  // 1329
	
	return facility;
}

function SetupTransferAatfsData(req)
{
    var selectedTransferCategories = req.session.data['selected-transfer-categories'];
    var categoryItems = new CategoryItems();
    var aatfs = req.session.data['selected-transfer-aatfs'];
    var selectedTransferableNotes = req.session.data['selected-facility-transferable-notes'];
  
    var tempData = [
        {
            aatfid: 1,
            evidenceNote: 1399,
			//startDate: '12/01/2022',
			//endDate: '15/02/2022',
            aatf: "Recycle team",
            aatfRef: "WEE/AB1234YZ/ATF",
            category : [{
                id : 4,
                received: 50,
                reused: 0
            },
            {
                id : 6,
                received: 25,
                reused: 0
            }]
        },
        {
            aatfid: 1,
            aatf: "Recycle team",
            aatfRef: "WEE/AB0207YZ/ATF",
            evidenceNote: 1400,
			//startDate: '22/02/2022',
			//endDate: '25/03/2022',
            category : [{
                id : 4,
                received: 20,
                reused: 0
            },
            {
                id : 6,
                received: 30,
                reused: 0
            }]
        },
        {
            aatfid: 2,
            aatf: "WEEE waste",
            aatfRef: "WEE/AB2514YZ/ATF",
            evidenceNote: 1450,
			//startDate: '05/01/2022',
			//endDate: '19/03/2022',
            category : [{
                id : 4,
                received: 50,
                reused: 0
            },
            {
                id : 6,
                received: 25,
                reused: 0
            }]
        }
    ]; 

    if (!aatfs){
        aatfs = [];
    }
	
	//selectedTransferableNotes = null;  // debug first control block

    if (!selectedTransferableNotes)
	{
        
        for(var tempCount = 0; tempCount < tempData.length; tempCount++)
        {
            var note = tempData[tempCount];
            
            var findAatf = aatfs.find(a => a._id === note.aatfid);
    
            if(!findAatf) 
			{
                findAatf = new TransferAatf(note.aatfid, note.aatf, note.aatfRef);
                aatfs.push(findAatf);
            }
    
            var newEvidenceNote = new TransferAatfNote(note.evidenceNote);
    
            if (!selectedTransferCategories)
            {
                selectedTransferCategories = [];
                for(var categoryCount = 0; categoryCount < note.category.length; categoryCount++) 
				{
                    var noteCategory = note.category[categoryCount];
                    
                    var category = categoryItems._categoryItems.find(c => c._id === noteCategory.id);
        
                    newEvidenceNote._categories.push(new TransferAatfCategory(category, noteCategory.received, noteCategory.reused));
    
                    selectedTransferCategories.push(new TransferCategory(category, 0, 0));
                }
            } 
			else 
			{
                for(var categoryCount = 0; categoryCount < selectedTransferCategories.length; categoryCount++) 
				{
                    var noteCategory = selectedTransferCategories[categoryCount];
                    
                    var category = categoryItems._categoryItems.find(c => c._id === noteCategory._category._id);
        
                    var received = 0;
                    var reused = 0;
                    if (noteCategory.received)
					{
                        received = noteCategory.received;
                    } 
					else
					{
                        received = Math.floor(Math.random() * 10);
                    }
					
                    /*if (noteCategory.reused)
					{
                        reused = 0;
                    } 
					else
					{
                        reused = 0;
                    }*/
                    if (noteCategory.reused)
					{
                        reused = noteCategory.reused;
                    } 
					else
					{
                        reused = 0;
                    }
    
                    newEvidenceNote._categories.push(new TransferAatfCategory(category, received, reused));
                }
            }
            
            
            findAatf._notes.push(newEvidenceNote);
            }
        }
    
    else
	{
        
        for(var tempCount = 0; tempCount < selectedTransferableNotes.length; tempCount++)
        {
            var note = selectedTransferableNotes[tempCount];
            
            var findAatf = aatfs.find(a => a._id === note._aatf);			
			
            if(!findAatf) 
			{
                //findAatf = new TransferAatf(note._aatf, note._aatf, 'WEE/AB' + Math.floor(Math.random() * (19999 - 10000 + 1) + 10000).toString() + 'YZ/ATF');
                
				findAatf = new TransferAatf(note._aatf, note._aatf, note._aatfRef);
                aatfs.push(findAatf);
            }
    
            if (findAatf._notes.length === 0)
			{
                var newEvidenceNote = new TransferAatfNote(note._reference);
				

                for(var categoryCount = 0; categoryCount < selectedTransferCategories.length; categoryCount++) 
				{
                    var noteCategory = selectedTransferCategories[categoryCount];
                    
                    var category = categoryItems._categoryItems.find(c => c._id === noteCategory._category._id);
        
                    var received = Math.floor(Math.random() * 10);

                    var reused = received - (Math.floor(Math.random() * 7));
                    if (reused < 0 || reused == 0)
					{
                        reused = 0;
                    }

                    newEvidenceNote._categories.push(new TransferAatfCategory(category, received, reused));
                }
         
                findAatf._notes.push(newEvidenceNote);
            }   
        }
    }

    req.session.data['selected-transfer-categories'] = selectedTransferCategories;
    req.session.data['selected-transfer-aatfs'] = aatfs;
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
    
	//facility = facilities.find(fac => fac._name === selectedFacility);
	facility = facilities.find(fac => fac._name == selectedFacility);

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
    
        // [25..29] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Submitted", 1352, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1334, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1377, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Approved", 1324, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Rejected", 1317, '11/11/2022 11:32:40'));
    
        // [30..34] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Submitted", 1259, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Submitted", 1267, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Rejected", 1216, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1344, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Approved", 1351, '11/11/2022 11:32:40'));
    
        // [35..39] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Approved", 1488, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Approved", 1469, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Submitted", 1472, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1429, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1499, '11/11/2022 11:32:40'));
    
        // [40..44] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Approved", 1481, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Approved", 1461, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Submitted", 1471, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1422, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1425, '11/11/2022 11:32:40'));
    
        // [45..49] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Approved", 1581, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Approved", 1561, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Submitted", 1571, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1522, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1525, '11/11/2022 11:32:40'));
    
        // [50..54] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Approved", 1688, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Approved", 1665, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', received, reused, "Submitted", 1676, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', received, reused, "Submitted", 1623, '11/11/2022 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', received, reused, "Draft", 1627, '11/11/2022 11:32:40'));
    
        
        
        
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
		
		// we want editable records listed first
		
		if ( status === 'Draft' )
		{
			// draft must be at the top of the list
			facility._evidenceNotes[o]._sortOrder = 0;
		}
		if ( status === 'Returned' )
		{
			// Returned must be at the top of the list but after Draft
			facility._evidenceNotes[o]._sortOrder = 1;
		}
		if ( status === 'Submitted' )
		{
			// submitted notes come second on the list
			facility._evidenceNotes[o]._sortOrder = 2;
		}
		if ( status !== 'Draft' && status !== 'Submitted' )
		{
			// other types of notes will follow in unsorted order
			facility._evidenceNotes[o]._sortOrder = 3;
		}
	}
	
	// sort over 2 columns:  submitted date in descending order
	facility._evidenceNotes.sort((a, b) => (a._sortOrder > b._sortOrder) ? 1 : (a._sortOrder === b._sortOrder) ? ((a._submittedDate > b._submittedDate) ? -1 : 1) : -1 );
	
	
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

    
    res.redirect('/version-2/aatf-journey/303-manage-evidence-redirect');
});

router.post('/version-2/302-choose-site-redirect', function(req, res){
    
    var facility = CreateFacilityWithEvidenceNotes(req);
    req.session.data['chosen-facility'] = facility; 

    res.redirect('/version-2/aatf-journey/303-manage-evidence-redirect');
});

router.get('/version-2/305-edit-evidence-note-redirect', function(req, res){
    var facility = req.session.data['chosen-facility']; 
    var evidenceNote = facility._evidenceNotes.find(find => find._reference === Number(req.query['id']));
    
	req.session.data['selected-evidence-note'] = evidenceNote;
    req.session.data['selectedStartDate'] = moment(evidenceNote._startDate).format('YYYY-MM-DD');
    req.session.data['selectedEndDate'] = moment(evidenceNote._endDate).format('YYYY-MM-DD');
    req.session.data['selectedpcs'] = (evidenceNote._pcs === '') ? 'Recipient name' : evidenceNote._pcs;
    
    res.redirect('/version-2/305_Edit_evidence_note');
});






// ------------------------------------------------------------------------------------
// VERSION 3 - PCS Journey
// ------------------------------------------------------------------------------------

function CreatePCSFacilitiesWithEvidenceNotes(req)
{
    var facility = new Facility('Recycling Team Ltd', 2, 'WEE/AB5678GH/ATF');

    if (facility._evidenceNotes == null || facility._evidenceNotes.length === 0)
	{
        facility._evidenceNotes = [];

        // [0..4] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'ERP UK', '2022', 'Household', 'Actual', 150.025, 10.001, "Draft", 1389, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        var newNote = new EvidenceNote('01/02/2022', '31/02/2022', 'ERP UK', '2022', 'Household', 'Actual', 180.005, 10.001, "Submitted", 1211, '11/11/2021 11:32:40');
        newNote._aatf = "Intelligent Waste Management Ltd";
        facility._evidenceNotes.push(newNote);
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/03/2022', '31/03/2022', 'ERP UK', '2022', 'Household', 'Actual', 210.110, 10.001, "Approved", 1255, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/04/2022', '31/04/2022', 'ERP UK', '2022', 'Household', 'Actual', 120.225, 10.001, "Rejected", 1329, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/05/2022', '31/05/2022', 'ERP UK', '2022', 'Household', 'Actual', 190.120, 10.001, "Draft", 1321, '11/11/2021 11:32:40'));
    
    
        // [5..9] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 140.265, 20.002, "Void", 1150, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        var newNote = new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', 130.256, 20.002, "Submitted", 1189, '11/11/2021 11:32:40');
        newNote._aatf = "Recycling Lives Ltd (Recycling Park)";
        facility._evidenceNotes.push(newNote);
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 240.668, 10.002, "Returned", 1367, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', 350.256, 2.002, "Rejected", 1890, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 560.111, 2.002, "Approved", 1391, '11/11/2021 11:32:40'));
    
    
        // [10..14] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        var newNote = new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', 308.005, 0.005, "Submitted", 1122, '11/11/2021 11:32:40')
        newNote._aatf = "Environcom England Ltd";
        facility._evidenceNotes.push(newNote);
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', 192.222, 10.521, "Rejected", 1379, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', 290.252, 30.005, "Void", 1654, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 122.125, 2.101, "Void", 1288, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', 365.001, 2.001, "Void", 1659, '11/11/2021 11:32:40'));
        
    
        // [15..19] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        var newNote1 = new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', 225.664, 6.369, "Submitted", 1123, '11/11/2021 11:32:40')
        newNote1._aatf = "Electrical Waste Recycling Group Limited (Huddersfield)";
        facility._evidenceNotes.push(newNote1);
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', 329.152, 2.354, "Approved", 1387, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', 241.005, 4.105, "Returned", 1654, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 260.102, 10.005, "Rejected", 1366, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Waste Electrical Recycling Scheme', '2022', 'Household', 'Actual', 270.256, 10.102, "Void", 1659, '11/11/2021 11:32:40'));
    
   
        
        // ------------------------------------------------------------------------------------------
        // Submitted evidence notes 
        // facility._evidenceNotes[0]._submittedDate = moment(new Date(2022, 01, 4, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        // ------------------------------------------------------------------------------------------
        
        facility._evidenceNotes[1]._submittedDate = moment(new Date(2022, 01, 4, 11, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[6]._submittedDate = moment(new Date(2022, 01, 5, 14, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[10]._submittedDate = moment(new Date(2022, 01, 6, 17, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        facility._evidenceNotes[15]._submittedDate = moment(new Date(2022, 01, 7, 20, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY');
        
    }
	
	return facility;
}

router.get('/version-2/pcs-journey/index', function(req, res)
{
	req.session.data['index-action-link'] = '/version-2/pcs-journey/309-choose-activity-pcs';
    res.redirect('/version-2/index');
});

router.get('/version-2/pcs-journey/309-choose-activity-pcs', function(req, res)
{
	req.session.data['header']['organisation'] = 'PCS Ltd';
	req.session.data['header']['activity'] = 'choose activity';
    req.session.data['facilities'] = [];
    req.session.data['schemes'] = new Schemes();
    req.session.data['paste-values'] = '';
    req.session.data['selected-transfer-aatfs'] = null;
    req.session.data['selected-transfer-categories'] = null;
    req.session.data['chosen-facility'] = null;
    
    res.redirect('/version-2/309_Choose_activity_PCS');
});

/*
router.get('/version-2/pcs-journey/309-choose-site', function(req, res)
{
	req.session.data['header']['organisation'] = 'PCS Ltd';
	req.session.data['header']['activity'] = 'choose site';
    var schemes = new Schemes();
    var facilities = [];
    facilities.push(new Facility('PCS Ltd Darlaston', 1, 'WEE/AB1234GH/ATF'));
    facilities.push(new Facility('PCS Ltd Woking', 2, 'WEE/AB5678GH/ATF'));
    facilities.push(new Facility('PCS Ltd Maidenhead', 3, 'WEE/AB9012GH/ATF'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';

    res.redirect('/version-2/309_Choose_site');
});
*/

router.get('/version-2/pcs-journey/310-manage-evidence', function(req, res)
{
	req.session.data['header']['organisation'] = 'PCS Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    var chosenFacility = req.session.data['chosen-facility'];
	var schemes = new Schemes();
    var facilities = [];
    facilities.push(new Facility('PCS Ltd Darlaston', 1, 'WEE/AB1234GH/ATF'));
    facilities.push(new Facility('PCS Ltd Woking', 2, 'WEE/AB5678GH/ATF'));
    facilities.push(new Facility('PCS Ltd Maidenhead', 3, 'WEE/AB9012GH/ATF'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';

    var selectedFacility = null;
    if (!chosenFacility){
        selectedFacility = CreatePCSFacilitiesWithEvidenceNotes(req);
    }
	else{
        selectedFacility = chosenFacility;
    }

	// Sort by Status then Submitted Date 
	// Draft first then submitted in descending date order
	// Draft, Rejected, Approved, Submitted
	// WARNING: this sort must be done before pagination (lower down)
	for ( var o = 0; o < selectedFacility._evidenceNotes.length; o++ )
	{
		var order = selectedFacility._evidenceNotes[o]._sortOrder;
		var status = selectedFacility._evidenceNotes[o]._status;
		
		// we want editable records listed first
		
		if ( status === 'Draft' )
		{
			// draft must be at the top of the list
			selectedFacility._evidenceNotes[o]._sortOrder = 0;
		}
		if ( status === 'Returned' )
		{
			// Returned must be at the top of the list but after Draft
			selectedFacility._evidenceNotes[o]._sortOrder = 1;
		}
		if ( status === 'Submitted' )
		{
			// submitted notes come second on the list
			selectedFacility._evidenceNotes[o]._sortOrder = 2;
		}
		if ( status !== 'Draft' && status !== 'Submitted' )
		{
			// other types of notes will follow in unsorted order
			selectedFacility._evidenceNotes[o]._sortOrder = 3;
		}
	}
	
	// sort over 2 columns:  submitted date in descending order
	selectedFacility._evidenceNotes.sort((a, b) => (a._sortOrder > b._sortOrder) ? 1 : (a._sortOrder === b._sortOrder) ? ((a._submittedDate > b._submittedDate) ? -1 : 1) : -1 );
	
	
	// WARNING: make sure pagination is applied to sorted list first.
	// page size is hard-coded but should be stored in session is changed by UI
	var pageSize = 10;
	
	for ( var v = 0; v < selectedFacility._evidenceNotes.length; v++ )
	{
		selectedFacility._evidenceNotes[v]._isVisible = false;
		
		if ( v < pageSize )
		{
			selectedFacility._evidenceNotes[v]._isVisible = true;
		}
	}

	// Evidence Summary - calculate totals for first tab
	var tonnesReceived = 0;
	var tonnesObligation = 11025;
	
	for(var e = 0; e < selectedFacility._evidenceNotes.length; e++)
	{
		var received = parseFloat(selectedFacility._evidenceNotes[e]._received);
		tonnesReceived += received;
	}

	// Tonnes required to meet obligation
	var tonnesRequired = tonnesObligation - tonnesReceived;

    req.session.data['total-tonnes-obligation'] = formatTotalTonnage(tonnesObligation);
    req.session.data['total-tonnes-received'] = formatTotalTonnage(tonnesReceived.toFixed(0));
    req.session.data['total-tonnes-required'] = formatTotalTonnage(tonnesRequired.toFixed(0));
	
    req.session.data['chosen-facility'] = selectedFacility;
	req.session.data['chosen-facility-transferable-notes'] = selectedFacility._evidenceNotes.filter(n => n._status === 'Submitted');
	req.session.data['chosen-facility-submitted-notes'] = selectedFacility._evidenceNotes.filter(n => n._status === 'Submitted');
	req.session.data['chosen-facility-reviewed-notes'] = selectedFacility._evidenceNotes.filter(n => (n._status === 'Approved' || n._status === 'Rejected' || n._status === 'Returned'));
	
    res.redirect('/version-2/310_Manage_evidence_tabs');
});

router.get('/version-2/pcs-journey/320-view-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'PCS Ltd';
	req.session.data['header']['activity'] = 'view evidence note';
    var facility = req.session.data['chosen-facility']; 
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == Number(req.query['id']));

    res.redirect('/version-2/320_View_evidence_note');
});

router.get('/version-2/pcs-journey/311-review-evidence-note', function(req, res)
{
    var facility = req.session.data['chosen-facility']; 
	req.session.data['header']['organisation'] = 'PCS Ltd';
	req.session.data['header']['activity'] = 'review evidence notes';
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == Number(req.query['id']));
    req.session.data['chosen-status-' + req.query['id']]  = null;
    req.session.data['reject-return-reason'] = null;

    res.redirect('/version-2/311_Review_evidence_note');
});

// this is called by Review Evidence page when posting back user's input
router.get('/version-2/pcs-journey/312-download-approved-evidence-pdf', function(req, res)
{
	req.session.data['header']['organisation'] = 'PCS Ltd';
	req.session.data['header']['activity'] = 'View evidence note';
	//var reason = data['reject-return-reason'];
	
	var evidenceNote = data['selected-evidence-note'];
	evidenceNote._status = data['choose-status'];
	req.session.data['selected-evidence-note'] = evidenceNote;
	
	if ( evidenceNote._status == 'Approved' ) req.session.data['date-approved'] = moment(new Date(), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
	if ( evidenceNote._status == 'Rejected' ) req.session.data['date-rejected'] = moment(new Date(), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
	if ( evidenceNote._status == 'Returned' ) req.session.data['date-returned'] = moment(new Date(), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');

    res.redirect('/version-2/312_Download_approved_evidence');
});

router.get('/version-2/pcs-journey/314-transfer-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'PCS Ltd';
	req.session.data['header']['activity'] = 'Transfer evidence';
	
    res.redirect('/version-2/314_Transfer_evidence_note');
});





// ------------------------------------------------------------------------------------
// Version 4 - AATF journey
// ------------------------------------------------------------------------------------

function CreateAATFFacilitiesWithEvidenceNotes(req)
{
    var facility = new Facility('Recycling Team Ltd', 2, 'WEE/AB5678GH/ATF');

    if (facility._evidenceNotes == null || facility._evidenceNotes.length === 0)
	{
        facility._evidenceNotes = [];

        // [0..4] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'ERP UK', '2022', 'Household', 'Actual', 150.025, 10.001, "Draft", 1389, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        var newNote = new EvidenceNote('01/02/2022', '31/02/2022', 'ERP UK', '2022', 'Household', 'Actual', 180.005, 10.001, "Submitted", 1211, '11/11/2021 11:32:40');
        newNote._aatf = "Intelligent Waste Management Ltd";
        facility._evidenceNotes.push(newNote);
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/03/2022', '31/03/2022', 'ERP UK', '2022', 'Household', 'Actual', 210.110, 10.001, "Approved", 1255, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/04/2022', '31/04/2022', 'ERP UK', '2022', 'Household', 'Actual', 120.225, 10.001, "Rejected", 1329, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/05/2022', '31/05/2022', 'ERP UK', '2022', 'Household', 'Actual', 190.120, 10.001, "Draft", 1321, '11/11/2021 11:32:40'));
    
    
        // [5..9] -------------------------------------------
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 140.265, 20.002, "Void", 1150, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        var newNote = new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', 130.256, 20.002, "Submitted", 1189, '11/11/2021 11:32:40');
        newNote._aatf = "Recycling Lives Ltd (Recycling Park)";
        facility._evidenceNotes.push(newNote);
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 240.668, 10.002, "Returned", 1367, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Epic', '2022', 'Household', 'Actual', 350.256, 2.002, "Rejected", 1890, '11/11/2021 11:32:40'));
    
        received = new Categories(2, null, null, null, null, null, null, null, null, null, null, null, null, null);
        reused = new Categories(1, null, null, null, null, null, null, null, null, null, null, null, null, null);
        facility._evidenceNotes.push(new EvidenceNote('01/01/2022', '31/01/2022', 'Recycling Lives', '2022', 'Household', 'Actual', 560.111, 2.002, "Void", 1391, '11/11/2021 11:32:40'));
    
        
        // ------------------------------------------------------------------------------------------
        // Submitted evidence notes 
        // facility._evidenceNotes[0]._submittedDate = moment(new Date(2022, 01, 4, 10, 4, 5), 'DD/MM/YYYY HH:mm:ss').format('DD/MM/YYYY HH:mm:ss');
        // ------------------------------------------------------------------------------------------
        
        facility._evidenceNotes[1]._submittedDate = moment(new Date(2022, 01, 4, 11, 4, 5), 'DD/MM/YYYY').format('DD/MM/YYYY');
        facility._evidenceNotes[3]._rejectedDate = moment(new Date(2022, 01, 4, 11, 4, 5), 'DD/MM/YYYY').format('DD/MM/YYYY');
        facility._evidenceNotes[6]._submittedDate = moment(new Date(2022, 01, 5, 14, 4, 5), 'DD/MM/YYYY').format('DD/MM/YYYY');
        
    }
	
	return facility;
}

router.get('/version-2/aatf-journey-v4/index', function(req, res)
{
	req.session.data['index-action-link'] = '/version-2/aatf-journey-v4/401-choose-activity-aatf';
    res.redirect('/version-2/index');
});

router.get('/version-2/aatf-journey-v4/401-choose-activity-aatf', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'choose activity';
    req.session.data['facilities'] = [];
    req.session.data['schemes'] = new Schemes();
    req.session.data['paste-values'] = '';
    req.session.data['selected-transfer-aatfs'] = null;
    req.session.data['selected-transfer-categories'] = null;
    req.session.data['chosen-facility'] = null;
	req.session.data['show-submission-panel'] = null;
    
    res.redirect('/version-2/401_Choose_activity_AATF');
});

router.get('/version-2/aatf-journey-v4/402-choose-site', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'choose site';
    var schemes = new Schemes();
    var facilities = [];
    facilities.push(new Facility('ABB Ltd Darlaston', 1, 'WEEE/1004636/ATF'));
    facilities.push(new Facility('ABB Ltd Woking', 2, 'WEEE/1004637/ATF'));
    facilities.push(new Facility('ABB Ltd Maidenhead', 3, 'WEEE/1004638/ATF'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';

    res.redirect('/version-2/402_Choose_site');
});

router.get('/version-2/aatf-journey-v4/403-manage-evidence', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    var chosenFacility = req.session.data['chosen-facility'];
	var schemes = new Schemes();
    var facilities = [];
    facilities.push(new Facility('PCS Ltd Darlaston', 1, 'WEE/AB1234GH/ATF'));
    facilities.push(new Facility('PCS Ltd Woking', 2, 'WEE/AB5678GH/ATF'));
    facilities.push(new Facility('PCS Ltd Maidenhead', 3, 'WEE/AB9012GH/ATF'));

    req.session.data['facilities'] = facilities;
    req.session.data['schemes'] = schemes;
    req.session.data['paste-values'] = '';

    var selectedFacility = null;
    if (!chosenFacility)
	{
        selectedFacility = CreateAATFFacilitiesWithEvidenceNotes(req);
    }
	else
	{
        selectedFacility = chosenFacility;
    }

	// Sort by Status then Submitted Date 
	// Draft first then submitted in descending date order
	// Draft, Rejected, Approved, Submitted
	// WARNING: this sort must be done before pagination (lower down)
	for ( var o = 0; o < selectedFacility._evidenceNotes.length; o++ )
	{
		var order = selectedFacility._evidenceNotes[o]._sortOrder;
		var status = selectedFacility._evidenceNotes[o]._status;
		
		// we want editable records listed first
		
		if ( status === 'Draft' )
		{
			// draft must be at the top of the list
			selectedFacility._evidenceNotes[o]._sortOrder = 0;
		}
		if ( status === 'Returned' )
		{
			// Returned must be at the top of the list but after Draft
			selectedFacility._evidenceNotes[o]._sortOrder = 1;
		}
		if ( status === 'Submitted' )
		{
			// submitted notes come second on the list
			selectedFacility._evidenceNotes[o]._sortOrder = 2;
		}
		if ( status !== 'Draft' && status !== 'Submitted' )
		{
			// other types of notes will follow in unsorted order
			selectedFacility._evidenceNotes[o]._sortOrder = 3;
		}
	}
	
	// sort over 2 columns:  submitted date in descending order
	selectedFacility._evidenceNotes.sort((a, b) => (a._sortOrder > b._sortOrder) ? 1 : (a._sortOrder === b._sortOrder) ? ((a._submittedDate > b._submittedDate) ? -1 : 1) : -1 );
	
	
	// WARNING: make sure pagination is applied to sorted list first.
	// page size is hard-coded but should be stored in session is changed by UI
	var pageSize = 10;
	
	for ( var v = 0; v < selectedFacility._evidenceNotes.length; v++ )
	{
		selectedFacility._evidenceNotes[v]._isVisible = false;
		
		if ( v < pageSize )
		{
			selectedFacility._evidenceNotes[v]._isVisible = true;
		}
	}

	// Evidence Summary - calculate totals for first tab
	var totalDraftNotes = 0;
	var totalSubmittedNotes = 0;
	var totalApprovedNotes = 0;
	
	for(var e = 0; e < selectedFacility._evidenceNotes.length; e++)
	{
		var status = selectedFacility._evidenceNotes[e]._status;
		
		if ( status === 'Draft' )
		{
			totalDraftNotes++;
		}
		
		if ( status === 'Submitted' )
		{
			totalSubmittedNotes++;
		}
		
		if ( status === 'Approved' )
		{
			totalApprovedNotes++;
		}
	}

    req.session.data['total-draft-notes'] = formatWith1000Separator(totalDraftNotes);
    req.session.data['total-submitted-notes'] = formatWith1000Separator(totalSubmittedNotes);
    req.session.data['total-approved-notes'] = formatWith1000Separator(totalApprovedNotes);
	
    req.session.data['chosen-facility'] = selectedFacility;
	req.session.data['chosen-facility-draft-returned-notes'] = selectedFacility._evidenceNotes.filter(n => (n._status === 'Draft' || n._status === 'Returned'));
	req.session.data['chosen-facility-all-other-notes'] = selectedFacility._evidenceNotes.filter(n => (n._status !== 'Draft' && n._status !== 'Returned'));
	
    res.redirect('/version-2/403_Manage_evidence');
});

router.get('/version-2/aatf-journey-v4/404-create-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'create evidence note';
	
    res.redirect('/version-2/404_Create_evidence_note');
});

router.get('/version-2/aatf-journey-v4/405-view-draft-or-submitted-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
    var facility = req.session.data['chosen-facility'];
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == Number(req.query['id']));

    res.redirect('/version-2/405_View_draft_or_submitted_note');
});

router.post('/version-2/aatf-journey-v4/407-pdf-print-or-edit-dialog', function(req, res)
{
	req.session.data['header']['organisation'] = 'ABB Ltd';
	req.session.data['show-submission-panel'] = null;
	
	if ( req.session.data['action'] == 'submit1' )
	{
		req.session.data['header']['activity'] = 'print evidence note';

		res.redirect('/version-2/407_PDF_printed_dialog');
	}
	else
	{
		req.session.data['header']['activity'] = 'edit evidence note';
		
		res.redirect('/version-2/aatf-journey-v4/410-edit-draft-evidence-note');
	}
});

router.get('/version-2/aatf-journey-v4/410-edit-draft-evidence-note', function(req, res)
{
    var facility = req.session.data['chosen-facility'];
	
	var evidenceNote = null;
	
	if ( req.query['id'] )
	{
		evidenceNote = facility._evidenceNotes.find(find => find._reference == Number(req.query['id']));
		req.session.data['selected-evidence-note'] = evidenceNote;
	}
    else
	{
		evidenceNote = req.session.data['selected-evidence-note'];
	}
    
    req.session.data['selectedStartDate'] = moment(evidenceNote._startDate).format('YYYY-MM-DD');
    req.session.data['selectedEndDate'] = moment(evidenceNote._endDate).format('YYYY-MM-DD');
    req.session.data['selectedpcs'] = (evidenceNote._pcs === '') ? 'Recipient name' : evidenceNote._pcs;
    
    res.redirect('/version-2/410_Edit_draft_evidence_note');
});

router.post('/version-2/aatf-journey-v4/save-evidence-note', function(req, res)
{
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

    if (req.session.data['startDate']!=='')
	{
        startDate = req.session.data['startDate'];
    }
	
    if (req.session.data['endDate']!=='')
	{
        endDate = req.session.data['endDate'];
    }
	
    if (req.session.data['pcs']!=='Recipient name')
	{
        pcs = req.session.data['pcs'];
    }
	
    if (req.session.data['year']!=='0')
	{
        year = req.session.data['year'];
    }
	
    if (req.session.data['protocol']!=='0')
	{
        protocol = req.session.data['protocol'];
    }
    
    if (req.session.data['wasteType']!=='0')
	{
        wasteType = req.session.data['wasteType'];
    }
	
    var evidenceNote = new EvidenceNote(startDate, endDate, pcs, 
                                        year, wasteType, protocol, 
										received1, reused1, status, evidenceNumber, 
										moment().format('DD/MM/YYYY'));

    if (req.session.data['action'] == 'submit')
	{
        status = 'Submitted';
        var date = new Date();
        evidenceNote._submittedDate = moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY');
        evidenceNote._searchDate = moment(evidenceNote._submittedDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
    } 
	else 
	{
        status = 'Draft';
    };

    evidenceNote._status = status;
	
	// refresh persisted facility before loading manage page
    var evidenceNoteIndex = facility._evidenceNotes.findIndex(find => find._reference == Number(evidenceNumber));
	facility._evidenceNotes[evidenceNoteIndex] = evidenceNote;
	req.session.data['chosen-facility'] = facility;
	
	req.session.data['show-submission-panel'] = true;
    
	res.redirect('/version-2/aatf-journey-v4/405-view-draft-or-submitted-note');
});

router.post('/version-2/aatf-journey-v4/create-evidence-note', function(req, res)
{
	selectedFacility = CreateAATFFacilitiesWithEvidenceNotes(req);
	
	// extract highest reference number and increment by 1
	var evidenceNumbers = [];

	if (selectedFacility._evidenceNotes)
	{
		for (e = 0; e < selectedFacility._evidenceNotes.length; e++)
		{
			evidenceNumbers.push( new Number( selectedFacility._evidenceNotes[e]._reference ) );
		}
	}
    else
	{
		evidenceNumbers.push( 0 );
	}
	
	var newIndex = getMax(evidenceNumbers) + 1;
	
    // collect input data from the page
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

    if (req.session.data['startDate']!=='')
	{
        startDate = req.session.data['startDate'];
    }
	
    if (req.session.data['endDate']!=='')
	{
        endDate = req.session.data['endDate'];
    }
	
    if (req.session.data['pcs']!=='Recipient name')
	{
        pcs = req.session.data['pcs'];
    }
	
    if (req.session.data['year']!=='0')
	{
        year = req.session.data['year'];
    }
	
    if (req.session.data['protocol']!=='0')
	{
        protocol = req.session.data['protocol'];
    }
    
    if (req.session.data['wasteType']!=='0')
	{
        wasteType = req.session.data['wasteType'];
    }
	
	// creation of the new note
    var newEvidenceNote = new EvidenceNote(startDate, endDate, pcs, 
                                        year, wasteType, protocol, 
										received1, reused1, status, newIndex, 
										moment().format('DD/MM/YYYY'));
	
    if (req.session.data['action'] == 'submit1')
	{
        newEvidenceNote._status = 'Submitted';
        var date = new Date();
        newEvidenceNote._submittedDate = moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY');
        newEvidenceNote._searchDate = moment(newEvidenceNote._submittedDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
		req.session.data['show-submission-panel'] = true;
    } 
	else 
	{
        newEvidenceNote._status = 'Draft';
		req.session.data['show-submission-panel'] = null;
    };

	selectedFacility._evidenceNotes.push(newEvidenceNote);
	
	// refresh persisted facility before exiting and selected evidence note for display
	req.session.data['chosen-facility'] = selectedFacility;
	req.session.data['selected-evidence-note'] = newEvidenceNote;
    
	//res.redirect('/version-2/aatf-journey-v4/405-view-draft-or-submitted-note');  curiously, this refuses to work - 'selected-evidence-note' gets overwritten
	res.redirect('/version-2/405_View_draft_or_submitted_note');
});







// ------------------------------------------------------------------------------------
// Version 4 - PCS journey
// ------------------------------------------------------------------------------------
// -----------------
// init pages
// -----------------

router.get('/version-2/pcs-journey-v4/411-choose-activity-pcs-init', function(req, res)
{
    res.redirect('/version-2/pcs-journey-v4/411-choose-activity-pcs');
});

router.get('/version-2/pcs-journey-v4/411-choose-site-init', function(req, res)
{
    res.redirect('/version-2/pcs-journey-v4/411-choose-site');
});

router.get('/version-2/pcs-journey-v4/412-manage-evidence-init', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    var facility = CreatePCSFacilitiesWithEvidenceNotes(req);
    req.session.data['chosen-facility'] = facility;
	
    res.redirect('/version-2/pcs-journey-v4/412-manage-evidence-note');
});

router.get('/version-2/pcs-journey-v4/413-review-evidence-init', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';

    var facility = CreatePCSFacilitiesWithEvidenceNotes(req);
    req.session.data['chosen-facility'] = facility;
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == 1389);  // pick first submitted note on the list
	
    res.redirect('/version-2/413_Review_evidence_note');
});

router.get('/version-2/pcs-journey-v4/414-view-download-approved-evidence-init', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    var facility = CreatePCSFacilitiesWithEvidenceNotes(req);
    req.session.data['chosen-facility'] = facility;
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == 1255);  // pick first approved note on the list

	// status=Approved - no reason given
	req.session.data['reject-return-reason'] = null;

    res.redirect('/version-2/414_Download_reviewed_evidence_note');
});

router.get('/version-2/pcs-journey-v4/414-view-download-rejected-evidence-init', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    var facility = CreatePCSFacilitiesWithEvidenceNotes(req);
    req.session.data['chosen-facility'] = facility;
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == 1329);  // pick first rejected note on the list
	req.session.data['reject-return-reason'] = "Note rejected due to multiple errors in tonnages.";

    res.redirect('/version-2/414_Download_reviewed_evidence_note');
});

router.get('/version-2/pcs-journey-v4/414-view-download-returned-evidence-init', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    var facility = CreatePCSFacilitiesWithEvidenceNotes(req);
    req.session.data['chosen-facility'] = facility;
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == 1367);  // pick first rejected note on the list
	req.session.data['reject-return-reason'] = "Note returned due to missing items in inventory list.";

    res.redirect('/version-2/414_Download_reviewed_evidence_note');
});

router.get('/version-2/pcs-journey-v4/415-transfer-select-categories-init', function(req, res)
{
	console.log('page: 415-transfer-select-categories  has been called');
	
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence note';
	
    res.redirect('/version-2/415_Transfer_Select_Categories');
});

router.get('/version-2/pcs-journey-v4/416-choose-notes-to-transfer-from-init', function(req, res)
{
	req.session.data['waste-1'] = 'on';
	req.session.data['waste-2'] = 'on';
	req.session.data['waste-6'] = 'on';
	req.session.data['waste-8'] = 'on';
	
    res.redirect('/version-2/pcs-journey-v4/416-choose-notes-to-transfer-from');
});

router.get('/version-2/pcs-journey-v4/417-choose-tonnage-to-transfer-init', function(req, res)
{
	//req.session.data['waste-1'] = 'on';
	//req.session.data['waste-2'] = 'on';
	//req.session.data['waste-6'] = 'on';
	//req.session.data['waste-8'] = 'on';
	
    res.redirect('/version-2/417_Choose_tonnage_to_transfer');
});

router.get('/version-2/pcs-journey-v4/418-check-transfer-details-init', function(req, res)
{
	//req.session.data['waste-1'] = 'on';
	//req.session.data['waste-2'] = 'on';
	//req.session.data['waste-6'] = 'on';
	//req.session.data['waste-8'] = 'on';
	
    res.redirect('/version-2/418_Check_transfer_details');
});

router.get('/version-2/pcs-journey-v4/419-view-transfer-note-after-submission-init', function(req, res)
{
	// ------------
	//var newNote = new EvidenceNote('01/01/2022', '31/01/2022', 'ABC Ltd', '2022', 'Household', 'Actual', 110.000, 0.000, "Submitted", 'T1399', '11/11/2021 11:32:40');
	//newNote._submittedDate = '12/12/2022';
	//var categories = new Category[];
	//categories[0].Category._totalReceived = 100;
	
	//req.session.data['total']['transferred']['4'] = 79;
	//req.session.req.session.data['total']['reused-transferred']['6'] = 0;
	
	//req.session.data['selected-transfer-categories'] = categories;
	// ------------

	//var aatfs = new AATFs();
	
	//var transferNote = new TransferNote('T0123', aatfs, 'Submitted', '2022');
	
	//req.session.data['selected-transfer-aatfs'] = transferNote

	// ------------
	
	SetupTransferAatfsData(req);
	
    res.redirect('/version-2/419_View_transfer_note_after_submission');
});

router.get('/version-2/pcs-journey-v4/420-view-note-1399-after-transfer-init', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	var selectedEvidence = new EvidenceNote('01/01/2022', '31/01/2022', 'Electrical Waste Recycling Group Limited (Huddersfield)', '2022', 'Household', 'Actual', 140.265, 20.002, "Void", 1399, '11/11/2021 11:32:40')
	selectedEvidence._submittedDate = '02/08/21 11:48:37';
	selectedEvidence._approvedDate = '07/09/21 09:22:22';
	selectedEvidence._status = 'Approved';
	req.session.data['selected-evidence-note'] = selectedEvidence;
	
    res.redirect('/version-2/420_View_evidence_note');
});



// -----------------


router.get('/version-2/pcs-journey-v4/index', function(req, res)
{
	req.session.data['index-action-link'] = '/version-2/pcs-journey-v4/411-choose-activity-pcs';
    res.redirect('/version-2/index');
});

router.get('/version-2/pcs-journey-v4/411-choose-activity-pcs', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'choose activity';
    
	var selectedFacility = CreatePcsSelectedFacilityWithEvidenceNotes(req);
	req.session.data['chosen-facility'] = selectedFacility;
	
	//console.log(selectedFacility);
	
    req.session.data['schemes'] = new Schemes();
    req.session.data['paste-values'] = '';
	req.session.data['show-submission-panel'] = null;

    req.session.data['selected-transfer-aatfs'] = null;
    req.session.data['selected-transfer-categories'] = null;

    res.redirect('/version-2/411_Choose_activity_PCS');
});

router.get('/version-2/pcs-journey-v4/412-manage-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    req.session.data['paste-values'] = '';
    var selectedFacility = req.session.data['chosen-facility'];
	console.log(selectedFacility);

	// Sort by Status then Submitted Date 
	// Draft first then submitted in descending date order
	// Draft, Rejected, Approved, Submitted
	// WARNING: this sort must be done before pagination (lower down)
	
	for ( var o = 0; o < selectedFacility._evidenceNotes.length; o++ )
	{
		var order = selectedFacility._evidenceNotes[o]._sortOrder;
		var status = selectedFacility._evidenceNotes[o]._status;
		
		// we want editable records listed first
		
		if ( status === 'Draft' )
		{
			// draft must be at the top of the list
			selectedFacility._evidenceNotes[o]._sortOrder = 0;
		}
		if ( status === 'Returned' )
		{
			// Returned must be at the top of the list but after Draft
			selectedFacility._evidenceNotes[o]._sortOrder = 1;
		}
		if ( status === 'Submitted' )
		{
			// submitted notes come second on the list
			selectedFacility._evidenceNotes[o]._sortOrder = 2;
		}
		if ( status !== 'Draft' && status !== 'Submitted' )
		{
			// other types of notes will follow in unsorted order
			selectedFacility._evidenceNotes[o]._sortOrder = 3;
		}
	}

	// sort over 2 columns:  submitted date in descending order
	selectedFacility._evidenceNotes.sort((a, b) => (a._sortOrder > b._sortOrder) ? 1 : (a._sortOrder === b._sortOrder) ? ((a._submittedDate > b._submittedDate) ? -1 : 1) : -1 );
	
	
	// WARNING: make sure pagination is applied to sorted list first.
	// page size is hard-coded but should be stored in session is changed by UI
	var pageSize = 10;
	
	for ( var v = 0; v < selectedFacility._evidenceNotes.length; v++ )
	{
		selectedFacility._evidenceNotes[v]._isVisible = false;
		
		if ( v < pageSize )
		{
			selectedFacility._evidenceNotes[v]._isVisible = true;
		}
	}

	// Evidence Summary - calculate totals for first tab
	var totalSubmittedNotes = 0;
	var totalApprovedNotes = 0;
	
	for(var e = 0; e < selectedFacility._evidenceNotes.length; e++)
	{
		var status = selectedFacility._evidenceNotes[e]._status;
		
		if ( status === 'Submitted' )
		{
			totalSubmittedNotes++;
		}
		
		if ( status === 'Approved' )
		{
			totalApprovedNotes++;
		}
		
		selectedFacility._evidenceNotes[e]._receivedRoundedup = selectedFacility._evidenceNotes[e]._received.toFixed(0);
	}
	
	// I cater for 1 and 2-digit numbers inside the SVG black circle 
	// Emily thinks we won't have more than 2 digits numbers and this feature may not be retained
	// we need to change the x coordinate of the number within the SVG 
	// for 1-digit numbers x = 10 and for 2-digit numbers it is x = 5
	var totalSubmittedNotesX = (totalSubmittedNotes.length == 1) ? 10 : 5;
	
    req.session.data['total-submitted-notes-x'] = totalSubmittedNotesX;
    req.session.data['total-submitted-notes'] = formatWith1000Separator(totalSubmittedNotes);
    req.session.data['total-approved-notes'] = formatWith1000Separator(totalApprovedNotes);
	
    req.session.data['chosen-facility-sorted'] = selectedFacility;
	req.session.data['chosen-facility-submitted-notes'] = selectedFacility._evidenceNotes.filter(n => ((n._status === 'Submitted') && (n._isTransferred == false)));
	req.session.data['chosen-facility-transferrable-notes'] = selectedFacility._evidenceNotes.filter(n => (n._status !== 'Draft' && n._status !== 'Submitted' && n._isTransferred == false));
	req.session.data['chosen-facility-transferrable-notes-first-ten'] = selectedFacility._evidenceNotes.filter( n => ( (n._status !== 'Draft') && (n._status !== 'Submitted') && (n._isTransferred !== true) ) ).slice(0, 10);
	req.session.data['chosen-facility-transferred-notes'] = selectedFacility._evidenceNotes.filter(n => n._isTransferred == true);
	
    res.redirect('/version-2/412_Manage_evidence_note');
});

router.get('/version-2/pcs-journey-v4/413-review-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
	SetupTransferAatfsData(req);

    var facility = req.session.data['chosen-facility'];
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == Number(req.query['id']));
	
    res.redirect('/version-2/413_Review_evidence_note');
});

router.post('/version-2/pcs-journey-v4/414-save-and-continue', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';

	var selectedEvidenceNote = req.session.data['selected-evidence-note'];
	var choice = req.session.data['choose-status'];
	
	if ( choice == '1' ) selectedEvidenceNote._status = 'Approved';
	if ( choice == '2' ) selectedEvidenceNote._status = 'Rejected';
	if ( choice == '3' ) selectedEvidenceNote._status = 'Returned';
	
	req.session.data['selected-evidence-note'] = selectedEvidenceNote;
	
	// update the facility and push back for when returning to Manage evidence list
	var facility = req.session.data['chosen-facility'];
	var savedEvidence = facility._evidenceNotes.find(note => note._reference == Number(selectedEvidenceNote._reference));
	savedEvidence._status = selectedEvidenceNote._status;
	req.session.data['chosen-facility'] = facility;
	
    res.redirect('/version-2/414_Download_reviewed_evidence_note');
});

router.get('/version-2/pcs-journey-v4/415-transfer-select-categories', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence note';
	
	SetupTransferAatfsData(req);
	
    res.redirect('/version-2/415_Transfer_Select_Categories');
});

router.get('/version-2/pcs-journey-v4/416-choose-notes-to-transfer-from', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence note';
	
	// collect the categories picked by user
	var chosenScheme = req.session.data['transfer-selected-pcs'];
	console.log('scheme: ' + chosenScheme);
	
	var selectedTransferCategories = [];
    
    var categoryItems = new CategoryItems();
    

    if (req.session.data['waste-1'] && req.session.data['waste-1'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 1);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-2'] && req.session.data['waste-2'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 2);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-3'] && req.session.data['waste-3'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 3);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-4'] && req.session.data['waste-4'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 4);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-5'] && req.session.data['waste-5'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 5);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-6'] && req.session.data['waste-6'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 6);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-7'] && req.session.data['waste-7'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 7);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-8'] && req.session.data['waste-8'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 8);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-9'] && req.session.data['waste-9'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 9);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-10'] && req.session.data['waste-10'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 10);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-11'] && req.session.data['waste-11'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 11);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-12'] && req.session.data['waste-12'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 12);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-13'] && req.session.data['waste-13'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 13);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }
    if (req.session.data['waste-14'] && req.session.data['waste-14'][0] === 'on'){
        var category = categoryItems._categoryItems.find(c => c._id === 14);
        selectedTransferCategories.push(new TransferAatfCategory(category, 0, 0));
    }

    req.session.data['selected-transfer-categories'] = selectedTransferCategories;
    //req.session.data['selected-transfer-aatfs'] = null;
	
    res.redirect('/version-2/416_Choose_notes_to_transfer_from');
});

router.post('/version-2/pcs-journey-v4/417-choose-tonnage-to-transfer', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
	//SetupTransferAatfsData(req);
	
    res.redirect('/version-2/417_Choose_tonnage_to_transfer');
});

router.post('/version-2/pcs-journey-v4/418-check-transfer-details', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';

    res.redirect('/version-2/418_Check_transfer_details');
});

router.get('/version-2/pcs-journey-v4/419-view-transfer-note-after-submission', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';

	
	
    res.redirect('/version-2/419_Check_transfer_details');
});

router.get('/version-2/pcs-journey-v4/420-view-evidence-note', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence note';
    var facility = req.session.data['chosen-facility']; 
	req.session.data['selected-evidence-note'] = facility._evidenceNotes.find(note => note._reference == Number(req.query['id']));

    res.redirect('/version-2/420_View_evidence_note');
});

router.get('/version-2/pcs-journey-v4/421-download-as-pdf', function(req, res)
{
	req.session.data['header']['organisation'] = 'Recycling Team Ltd';
	req.session.data['header']['activity'] = 'manage evidence notes';
	
    res.redirect('/version-2/421_PDF_printed_dialog');
});




module.exports = router;

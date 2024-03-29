const router = require('express').Router();
const Categories = require('../../data/categories');
const CategoryItems = require('../../data/category-items');
const EvidenceNote = require('../../data/evidence-note');
const Facility = require('../../data/facility');
const Schemes = require('../../data/schemes');
const TransferAatf = require('../../data/transferAatf');
const TransferAatfCategory = require('../../data/transferAatfCategory');
const TransferAatfNote = require('../../data/transferAatfNotes');
const TransferCategory = require('../../data/transferCategory');
const TransferNote = require('../../data/transferNote');
const moment = require('./moment');


router.get('/version-2/pcs-journey-v4/317-view-transfer-note', function(req, res)
{

    setupAatfs(req);
    
    var note = req.session.data['new-transfer-note'];
    if (!note) {

        var aatfs = req.session.data['selected-transfer-aatfs'];
        var newNote = new TransferNote('T' + note._reference, aatfs, "Submitted", 2022);

        req.session.data['new-transfer-note'] = newNote;
    }

    res.redirect('/version-2/317_View_transfer_note');
});


router.get('/version-2/pcs-journey/316-submit-transfer-note', function(req, res)
{
    setupAatfs(req);

    res.redirect('/version-2/316_Submit_transfer_note');
});

router.post('/version-2/pcs-journey/316-save-and-continue', function(req, res){
    
    var aatfs = req.session.data['selected-transfer-aatfs'];

    var status = '';
    if (req.session.data['action'] === 'submit'){
        status = 'Submitted'
    } else {
        status = 'Draft'
    };

    var newNote = new TransferNote('T' + Math.floor(Math.random() * 5000), aatfs, status, 2021);

    req.session.data['new-transfer-note'] = newNote;

    res.redirect('/version-2/pcs-journey/317-view-transfer-note');
});



function setupAatfs(req){
    var selectedTransferCategories = req.session.data['selected-transfer-categories'];
    var categoryItems = new CategoryItems();
    var aatfs = req.session.data['selected-transfer-aatfs'];
    var selectedTransferableNotes = req.session.data['selected-facility-transferable-notes'];
  
    var tempData = [
        {
            aatfid: 1,
            evidenceNote: 1399,
            aatf: "Recycle team",
            aatfRef: "AATF12344",
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
            aatfRef: "AATF12344",
            evidenceNote: 1400,
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
            aatfRef: "AATF147283",
            evidenceNote: 1450,
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
            aatfid: 2,
            aatf: "WEEE waste",
            aatfRef: "AATF147283",
            evidenceNote: 1400,
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
            aatfRef: "AATF147283",
            evidenceNote: 1345,
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
        }
    ]; 

    if (!aatfs){
        aatfs = [];
    }

    if (!selectedTransferableNotes){
        
        for(var tempCount = 0; tempCount < tempData.length; tempCount++)
        {
            var note = tempData[tempCount];
            
            var findAatf = aatfs.find(a => a._id === note.aatfid);
    
            if(!findAatf) {
                findAatf = new TransferAatf(note.aatfid, note.aatf, note.aatfRef);
                aatfs.push(findAatf);
            }
    
            var newEvidenceNote = new TransferAatfNote(note.evidenceNote);
    
            if (!selectedTransferCategories)
            {
                selectedTransferCategories = [];
                for(var categoryCount = 0; categoryCount < note.category.length; categoryCount++) {
                    var noteCategory = note.category[categoryCount];
                    
                    var category = categoryItems._categoryItems.find(c => c._id === noteCategory.id);
        
                    newEvidenceNote._categories.push(new TransferAatfCategory(category, noteCategory.received, noteCategory.reused));
    
                    selectedTransferCategories.push(new TransferCategory(category, 0, 0));
                }
            } else {
                for(var categoryCount = 0; categoryCount < selectedTransferCategories.length; categoryCount++) {
                    var noteCategory = selectedTransferCategories[categoryCount];
                    
                    var category = categoryItems._categoryItems.find(c => c._id === noteCategory._category._id);
        
                    var rec = 0;
                    var reused = 0;
                    if (noteCategory.received){
                        rec = noteCategory.received;
                    } else{
                        rec = Math.floor(Math.random() * 10);
                    }
                    if (noteCategory.reused){
                        reused = 0;
                    } else{
                        reused = 0;
                    }
    
                    newEvidenceNote._categories.push(new TransferAatfCategory(category, rec, reused));
                }
            }
            
            
            findAatf._notes.push(newEvidenceNote);
            }
        }
    
    else{
        
        for(var tempCount = 0; tempCount < selectedTransferableNotes.length; tempCount++)
        {
            var note = selectedTransferableNotes[tempCount];
            
            var findAatf = aatfs.find(a => a._id === note._aatf);

            if(!findAatf) {
                findAatf = new TransferAatf(note._aatf, note._aatf, 'AATF' + Math.floor(Math.random() * (19999 - 10000 + 1) + 10000).toString());
                aatfs.push(findAatf);
            }
    
            if (findAatf._notes.length === 0){
                var newEvidenceNote = new TransferAatfNote(note._reference);

                for(var categoryCount = 0; categoryCount < selectedTransferCategories.length; categoryCount++) {
                    var noteCategory = selectedTransferCategories[categoryCount];
                    
                    var category = categoryItems._categoryItems.find(c => c._id === noteCategory._category._id);
        
                    var rec = Math.floor(Math.random() * 10);

                    var reused = rec - (Math.floor(Math.random() * 7));
                    if (reused < 0 || reused === 0){
                        reused = 0;
                    }

                    newEvidenceNote._categories.push(new TransferAatfCategory(category, rec, reused));
                }
         
                findAatf._notes.push(newEvidenceNote);
            }   
        }
    }

    req.session.data['selected-transfer-categories'] = selectedTransferCategories;
    req.session.data['selected-transfer-aatfs'] = aatfs;
}


router.get('/version-2/pcs-journey/315-selected-evidence-notes', function(req, res)
{
    setupAatfs(req);
    
    res.redirect('/version-2/315_Selected_Evidence_notes');
});


router.post('/version-2/pcs-journey/315-save-and-continue', function(req, res){
    var aatfs = req.session.data['selected-transfer-aatfs'];
    var selectedTransferCategories = req.session.data['selected-transfer-categories'];
    
    for(var aatfCount=0; aatfCount < aatfs.length; aatfCount++){
        var aatf = aatfs[aatfCount];
        
        for (var noteCount = 0; noteCount < aatf._notes.length; noteCount ++){
            var note = aatf._notes[noteCount];

            for (var categoryCount = 0; categoryCount < note._categories.length; categoryCount++){
                var category = note._categories[categoryCount];

                var receivedTransfer = "transfer-rec-category-" + category._category._id + "-" + aatf._id + "-" + note._id;
                var reusedTransfer = "transfer-reused-category-" + category._category._id + "-" + aatf._id + "-" + note._id;

                var transferReceivedTonnage = req.session.data[receivedTransfer];
                if (!transferReceivedTonnage){
                    transferReceivedTonnage = 0;
                }
                var transferReusedTonnage = req.session.data[reusedTransfer];
                if (!transferReusedTonnage){
                    transferReusedTonnage = 0;
                }
                category._transferReceivedTonnage = transferReceivedTonnage;
                category._transferReusedTonnage = transferReusedTonnage;
            }
        }
    }

    for(var categoryCount = 0; categoryCount < selectedTransferCategories.length; categoryCount++) {
        var category = selectedTransferCategories[categoryCount];
        
        var receivedTotal = category._category._id + "-total-received-hidden";
        var reusedTotal = category._category._id + "-total-reused-hidden";
        
        category._totalReceived = req.session.data[receivedTotal] ;
        category._totalReused = req.session.data[reusedTotal] ;
    } 

    req.session.data['selected-transfer-categories'] = selectedTransferCategories;
    
    res.redirect('/version-2/pcs-journey/316-submit-transfer-note');
    
});
    
	
router.post('/version-2/pcs-journey/314-transfer-evidence-note', function(req, res)
{
    req.session.data['schemes'] = new Schemes();
    req.session.data['selected-transfer-categories'] = null;
    req.session.data['selected-transfer-aatfs'] = null;
    req.session.data['header']['activity'] = 'Transfer Evidence';
    var transferableNotes = req.session.data['chosen-facility-transferable-notes'];
    var selectedTransferableNotes = [];

    if (transferableNotes)
    {
        for(var count = 0; count < transferableNotes.length; count++) {

            var id = 'chk' + transferableNotes[count]._reference;
            
            if(req.session.data[id] && req.session.data[id][0] === 'on'){
                selectedTransferableNotes.push(transferableNotes[count]);
            }
        }
    }
    req.session.data['selected-facility-transferable-notes'] = selectedTransferableNotes;
    
    res.redirect('/version-2/314_Transfer_evidence_note');
});


router.post('/version-2/pcs-journey/314-save-and-continue', function(req, res){

    
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
    req.session.data['selected-transfer-aatfs'] = null;
    res.redirect('/version-2/pcs-journey/315-selected-evidence-notes');
});


router.post('/version-2/pcs-journey/311-review-evidence-note-save', function(req, res){

    
    var facility = req.session.data['chosen-facility']; 
    var evidenceNoteReference = req.session.data["evidence-note-reference"];
	//req.session.data['header']['activity'] = 'View evidence note';

    var evidenceNote = facility._evidenceNotes.find(note => note._reference == Number(evidenceNoteReference));
    
    const status = req.session.data['choose-status'];
	if ( status === '1' )
	{
        evidenceNote._status = 'Approved';
		req.session.data['chosen-status-' + evidenceNoteReference] = 'Approved';
	}
	
	if ( status === '2' )
	{
        evidenceNote._status = 'Rejected';
        req.session.data['chosen-status-' + evidenceNoteReference] = 'Rejected';
	}
 	
	if ( status === '3' )
	{
        evidenceNote._status = 'Returned';
        req.session.data['chosen-status-' + evidenceNoteReference] = 'Returned';
	}

	req.session.data['selected-evidence-note'] = evidenceNote;
    req.session.data['chosen-facility'] = facility;
    
    res.redirect('/version-2/320_View_evidence_note');
});


module.exports = router;

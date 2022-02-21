const router = require('express').Router();
const Categories = require('../../data/categories');
const CategoryItems = require('../../data/category-items');
const EvidenceNote = require('../../data/evidence-note');
const Facility = require('../../data/facility');
const Schemes = require('../../data/schemes');
const TransferAatf = require('../../data/transferAatf');
const TransferAatfCategory = require('../../data/transferAatfCategory');
const TransferAatfNote = require('../../data/transferAatfNotes');
const moment = require('./moment');



/* router.get('/version-2/pcs-journey/transfer-redirect', function(req, res)
{
    res.redirect('/version-2/314_Transfer_evidence_note');
}); */

function setupAatfs(req){
    var selectedTransferCategories = req.session.data['selected-transfer-categories'];
    var categoryItems = new CategoryItems();

    console.log(selectedTransferCategories);
    

    var tempData = [
        {
            aatfid: 1,
            evidenceNote: 1399,
            aatf: "Recycle team (AATF12344)",
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
            aatf: "Recycle team (AATF12344)",
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
            aatf: "WEEE waste (AATF147283)",
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
            aatf: "WEEE waste (AATF147283)",
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
            aatf: "WEEE waste (AATF147283)",
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

    var aatfs = [];
    for(var tempCount = 0; tempCount < tempData.length; tempCount++){
        var note = tempData[tempCount];
        
        var findAatf = aatfs.find(a => a._id === note.aatfid);

        if(!findAatf) {
            findAatf = new TransferAatf(note.aatfid, note.aatf);
            aatfs.push(findAatf);
        }

        var newEvidenceNote = new TransferAatfNote(note.evidenceNote);

        if (!selectedTransferCategories){
            for(var categoryCount = 0; categoryCount < note.category.length; categoryCount++) {
                var noteCategory = note.category[categoryCount];
                
                var category = categoryItems._categoryItems.find(c => c._id === noteCategory.id);
    
                newEvidenceNote._categories.push(new TransferAatfCategory(category, noteCategory.received, noteCategory.reused));
            }
        } else {
            for(var categoryCount = 0; categoryCount < selectedTransferCategories.length; categoryCount++) {
                var noteCategory = selectedTransferCategories[categoryCount];
                
                var category = categoryItems._categoryItems.find(c => c._id === noteCategory);
    
                var rec = 0;
                var reused = 0;
                if (noteCategory.received){
                    rec = noteCategory.received;
                } else{
                    rec = Math.floor(Math.random() * 10);
                }
                if (noteCategory.reused){
                    reused = noteCategory.reused;
                } else{
                    reused = Math.floor(Math.random() * 10);
                }

                newEvidenceNote._categories.push(new TransferAatfCategory(category, rec, reused));
            }
        }
        
        
        findAatf._notes.push(newEvidenceNote);
    }
    
    req.session.data['selected-transfer-aatfs'] = aatfs;
}
router.get('/version-2/pcs-journey/315-selected-evidence-notes', function(req, res)
{
    setupAatfs(req);
    res.redirect('/version-2/315_Selected_Evidence_notes');
});

router.post('/version-2/pcs-journey/315-selected-evidence-notes', function(req, res)
{
    setupAatfs(req);
    res.redirect('/version-2/315_Selected_Evidence_notes');
});

router.post('/version-2/pcs-journey/315-save-and-continue', function(req, res){
    var aatfs = req.session.data['selected-transfer-aatfs'];
    //console.log(req.session.data);
    for(var aatfCount=0; aatfCount < aatfs.length; aatfCount++){
        var aatf = aatfs[aatfCount];
        
        for (var noteCount = 0; noteCount < aatf._notes.length; noteCount ++){
            var note = aatf._notes[noteCount];

            for (var categoryCount = 0; categoryCount < note._categories.length; categoryCount++){
                var category = note._categories[categoryCount];

                var receivedTransfer = "transfer-rec-category-" + category._category._id + "-" + aatf._id + "-" + note._id;
                var reusedTransfer = "transfer-reused-category-" + category._category._id + "-" + aatf._id + "-" + note._id;

                category._transferReceivedTonnage = req.session.data[receivedTransfer];
                category._transferReusedTonnage = req.session.data[reusedTransfer];
            }
        }
    }
});

router.post('/version-2/pcs-journey/314-transfer-evidence-note', function(req, res)
{
    req.session.data['schemes'] = new Schemes();
    req.session.data['selected-transfer-categories'] = [];
    
    res.redirect('/version-2/314_Transfer_evidence_note');
});

router.post('/version-2/pcs-journey/314-save-and-continue', function(req, res){

    var selectedTransferCategories = [];
    
    if (req.session.data['waste-1'] && req.session.data['waste-1'][0] === 'on'){
        selectedTransferCategories.push(1);
    }
    if (req.session.data['waste-2'] && req.session.data['waste-2'][0] === 'on'){
        selectedTransferCategories.push(2);
    }
    if (req.session.data['waste-3'] && req.session.data['waste-3'][0] === 'on'){
        selectedTransferCategories.push(3);
    }
    if (req.session.data['waste-4'] && req.session.data['waste-4'][0] === 'on'){
        selectedTransferCategories.push(4);
    }
    if (req.session.data['waste-5'] && req.session.data['waste-5'][0] === 'on'){
        selectedTransferCategories.push(5);
    }
    if (req.session.data['waste-6'] && req.session.data['waste-6'][0] === 'on'){
        selectedTransferCategories.push(6);
    }
    if (req.session.data['waste-7'] && req.session.data['waste-7'][0] === 'on'){
        selectedTransferCategories.push(7);
    }
    if (req.session.data['waste-8'] && req.session.data['waste-8'][0] === 'on'){
        selectedTransferCategories.push(8);
    }
    if (req.session.data['waste-9'] && req.session.data['waste-9'][0] === 'on'){
        selectedTransferCategories.push(9);
    }
    if (req.session.data['waste-10'] && req.session.data['waste-10'][0] === 'on'){
        selectedTransferCategories.push(10);
    }
    if (req.session.data['waste-11'] && req.session.data['waste-11'][0] === 'on'){
        selectedTransferCategories.push(11);
    }
    if (req.session.data['waste-12'] && req.session.data['waste-12'][0] === 'on'){
        selectedTransferCategories.push(12);
    }
    if (req.session.data['waste-13'] && req.session.data['waste-13'][0] === 'on'){
        selectedTransferCategories.push(13);
    }
    if (req.session.data['waste-14'] && req.session.data['waste-14'][0] === 'on'){
        selectedTransferCategories.push(14);
    }

    //console.log(selectedTransferCategories);

    req.session.data['selected-transfer-categories'] = selectedTransferCategories;

    res.redirect('/version-2/pcs-journey/315-selected-evidence-notes');
});


module.exports = router;

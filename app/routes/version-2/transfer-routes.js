const router = require('express').Router();
const Categories = require('../../data/categories');
const EvidenceNote = require('../../data/evidence-note');
const Facility = require('../../data/facility');
const Schemes = require('../../data/schemes');
const moment = require('./moment');



/* router.get('/version-2/pcs-journey/transfer-redirect', function(req, res)
{
    res.redirect('/version-2/314_Transfer_evidence_note');
}); */

router.post('/version-2/pcs-journey/transfer-redirect', function(req, res)
{
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
});


module.exports = router;

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
    res.redirect('/version-2/314_Transfer_evidence_note');
});

router.post('/version-2/pcs-journey/314-save-and-continue', function(req, res){
    
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

module.exports = router;

const router = require('express').Router();

router.post('/create-new-evidence-redirect', function (req, res)
{
    res.redirect('/version-2/205_Create_evidence_note');
});

router.post('/manage-evidence-redirect', function (req, res) 
{
    
    const activity = req.session.data['choose-activity'];
    console.log(activity);
    if (activity === '7') 
	{
        res.redirect('/version-2/202_Choose_site');
    }
    res.redirect('/version-2/index');
});


router.get('/version-2/210-review-evidence-redirect', function (req, res) 
{
    req.session.data['evidence-number'] = req.query['num'];
    console.log(req.session.data['evidence-number']);
    res.render('/version-2/210_Review_evidence_note');
});

module.exports = router;
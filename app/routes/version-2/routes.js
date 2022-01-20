const router = require('express').Router();



router.post('/create-new-evidence-redirect', function (req, res){
    res.redirect('/version-2/205_Create_evidence_note_no_protocol');
});

router.post('/manage-evidence-redirect', function (req, res) {
    
    const activity = req.session.data['choose-activity'];
    console.log(activity)
    if (activity === '7') {
        res.redirect('/version-2/202_Choose_site');
    }
    res.redirect('/version-2/index');
});

module.exports = router;
const router = require('express').Router();
const Categories = require('../../data/categories');
const EvidenceNote = require('../../data/evidence-note');
const Facility = require('../../data/facility');

router.post('/version-2/choose-activity-redirect', function (req, res) {
    req.session.data['paste-values'] = '';
    const activity = req.session.data['choose-activity'];

    if (activity === '7') {
        res.redirect('/version-2/202_Choose_site');
    }
    res.redirect('/version-2/index');
});

router.post('/version-2/manage-evidence-redirect', function(req, res){
    var facilities = req.session.data['facilities'];
    if (!facilities || facilities.length === 0){
        facilities = [];
    }

    var facility = new Facility(req.session.data['choose-site'], 'id', 'app');
    facility.evidenceNotes = [];

    var receieved1 = new Categories(48, 21, 1, null, null, 14, 32, 11, null, 3, 1, null, 5, null);
    var reused1 = new Categories(2, null, 1, null, null, 3, null, 1, null, null, null, 1, 1, null);

    var receieved2 = new Categories(null, 56, null, 3, 1, 12, null, 80, 6, null, null, null, null, null);
    var reused2 = new Categories(null, 1, null, null, 6, 10, 2, 1, null, null, null, 1, 1, null);

    facility._evidenceNotes.push(new EvidenceNote('01/01/2020', '01/01/2021', 'Waste Electrical Recycling Compliance Scheme', '2020', 'Household', 'Actual', receieved1, reused1, "Draft", Math.floor(1000 + Math.random() * 9000)));
    facility._evidenceNotes.push(new EvidenceNote('01/01/2021', '01/01/2022', 'Waste Electrical Recycling Compliance Scheme', '2021', 'Household', 'Actual', receieved2, reused2, "Submitted", Math.floor(1000 + Math.random() * 9000)));

    facilities.push(facility);

    req.session.data['facilities']  = facilities;
    req.session.data['chosen-facility'] = facility; 

    console.log(req.session.data['chosen-facility']._evidenceNotes);
    res.redirect('/version-2/203_Manage_evidence');
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
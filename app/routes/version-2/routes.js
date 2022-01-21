const router = require('express').Router();

router.post('/version-2/manage-evidence-redirect', function (req, res) {
    req.session.data['paste-values'] = '';
    const activity = req.session.data['choose-activity'];
    console.log(activity)
    if (activity === '7') {
        res.redirect('/version-2/202_Choose_site');
    }
    res.redirect('/version-2/index');
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
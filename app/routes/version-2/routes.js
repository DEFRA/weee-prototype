const router = require('express').Router();




router.post('/manage-evidence-redirect', function (req, res) {
    
    const activity = req.session.data['choose-activity'];
    console.log(activity)
    if (activity === '7') {
        res.redirect('/version-2/202_Choose_site');
    }
    res.redirect('/version-2/index');
})


module.exports = router;
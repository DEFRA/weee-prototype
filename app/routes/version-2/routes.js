const router = require('express').Router();



router.post('/manage-evidence', function (req, res) {
    res.redirect('/version-2/201_Choose_activity_AATF')
})

module.exports = router;
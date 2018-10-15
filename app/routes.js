const express = require('express')
const router = express.Router()
const version1 = require('./routes/version1-1/routes')
const version2 = require('./routes/version1-2/routes')
const version3 = require('./routes/version1-3/routes')
const version4 = require('./routes/version1-4/routes')
const version5 = require('./routes/version1-5/routes')

// default
router.get('/', function (req, res) {
    res.redirect('/version1-5/SC001-Home')
})

//Index of versions route
router.get('/home', function (req, res) {
    res.redirect('/versions-home')
})

router.use(version1);
router.use(version2);
router.use(version3);
router.use(version4);
router.use(version5);

module.exports = router

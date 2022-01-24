const express = require('express')
const router = express.Router()

const version1 = require('./routes/version-1/routes');
const version2 = require('./routes/version-2/routes');
// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
    req.session.data['paste-values'] = '';
    res.redirect('/versions-home')
})

//Index of versions route
router.get('/home', function (req, res) {
    req.session.data['paste-values'] = '';
    res.redirect('/versions-home')
})


router.use(version1);
router.use(version2);

module.exports = router

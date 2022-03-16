const express = require('express')
const router = express.Router()

const version1 = require('./routes/version-1/routes');
const version2 = require('./routes/version-2/routes');
const transferRoutes = require('./routes/version-2/transfer-routes');
//const transferRoutesV4 = require('./routes/version-2/transfer-routes-v4');
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
router.use(transferRoutes);
//router.use(transferRoutesV4);

module.exports = router

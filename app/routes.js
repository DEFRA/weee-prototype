const express = require('express')
const router = express.Router()

const version1 = require('./routes/version-1/routes')
// Add your routes here - above the module.exports line

router.get('/', function (req, res) {
    res.redirect('/version-1/index')
})

//Index of versions route
router.get('/home', function (req, res) {
    res.redirect('/versions-home')
})

router.use(version1);

module.exports = router

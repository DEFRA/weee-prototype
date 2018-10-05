const express = require('express')
const router = express.Router()

// default
router.get('/', function (req, res) {
    res.redirect('/version1-4/SC001-Home')
})

//Index of versions route
router.get('/home', function (req, res) {
    res.redirect('/versions-home')
})

module.exports = router

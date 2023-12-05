const express = require('express');
const router = express.Router();
const path = require('path');

router.get(['/admin.*', '/admin'], (req, res) => {
    return res.render('admin/report');
});
module.exports = router;

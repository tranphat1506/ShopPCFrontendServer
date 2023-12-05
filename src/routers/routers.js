const express = require('express');
const path = require('path');
const router = express.Router();

const privateRouter = require('./private.router');
router.use('/', privateRouter);

const publicRouter = require('./public.router');
router.use('/', publicRouter);

const adminRouter = require('./admin.router');
router.use('/', adminRouter);

// 404 page
router.get('/*', (req, res) => {
    return res.status(404).json({
        code: 404,
        message: 'Not found',
    });
});
module.exports = router;

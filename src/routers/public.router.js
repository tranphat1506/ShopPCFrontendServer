const express = require('express');
const router = express.Router();
const ProductsApi = require('../../productsApi');
const { Nums2MoneyString, ReducePercentFrom2Nums } = require('../utils/formatV1');
router.get(['/loginForm.*', '/loginForm'], (req, res) => {
    return res.render('loginForm');
});

router.get('/', (req, res) => {
    return res.render('index');
});

router.get(['/sales.*', '/sales'], (req, res) => {
    return res.render('sales');
});

router.get(['/cart.*', '/cart'], (req, res) => {
    return res.render('cart');
});

router.get(['/sanpham.*', '/sanpham'], async (req, res) => {
    const { type, id } = req.query;
    if (!type || !id) return res.redirect('/');
    const product = ProductsApi[type][id];
    if (!product) return res.redirect('/');
    return res.render('sanpham', {
        ...product,
        star: product.star || 0,
        origin_price: Nums2MoneyString(product.origin_price || 0),
        reduce_price: Nums2MoneyString(product.reduce_price || 0),
        reduce_percent: Math.round(ReducePercentFrom2Nums(product.origin_price, product.reduce_price) * 100),
    });
});
module.exports = router;

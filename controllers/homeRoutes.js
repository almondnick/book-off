const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {


        res.render('login'); // login page which is our homepage
});

router.get('/homepage', async (req, res) => {


        res.render('homepage'); // login page which is our homepage
});

module.exports = router;
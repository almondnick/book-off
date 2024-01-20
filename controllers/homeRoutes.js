const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Reviews, Comments } = require('../models');


router.get('/', async (req, res) => {


        res.render('login'); // login page which is our homepage
});

router.get('/homepage', async (req, res) => {

        res.render('homepage', {
                logged_in: req.session.logged_in 
        }); // login page which is our homepage
});

router.get('/mybooks', async (req, res) => {

        res.render('mybooks', {
                logged_in: req.session.logged_in 
        }); // login page which is our homepage
});


router.get('/reviewpage', async (req, res) => {

        res.render('reviewpage', {
                logged_in: req.session.logged_in 
        }); // login page which is our homepage
});

router.get('/searchpage', async (req, res) => {

        res.render('searchpage', {
                logged_in: req.session.logged_in 
        }); // login page which is our homepage
});

router.get('/singlebook', async (req, res) => {

        res.render('singlebook', {
                logged_in: req.session.logged_in 
        }); // login page which is our homepage
});





module.exports = router;
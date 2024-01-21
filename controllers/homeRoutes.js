const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Reviews, Comments } = require('../models');


router.get('/', async (req, res) => { // The first route which is the login page

        try{
                res.render('login'); // login page which is our homepage
        } catch(err){
                res.status(500).json(err);
        }  
});

router.get('/login', async (req, res) => { // The  route to the login page

        try{
                res.render('login'); // login page which is our homepage
        } catch(err){
                res.status(500).json(err);
        }  
});

router.get('/homepage', withAuth, async (req, res) => { // our homepage route
        try {
                res.render('homepage', {
                        logged_in: req.session.logged_in,
                        user_name: req.session.user_name, 
                }); 
        } catch(err){
                res.status(500).json(err);
        }  
});

router.get('/mybooks', withAuth, async (req, res) => { // the my books section (profile page)
        try {
                res.render('mybooks', {
                        logged_in: req.session.logged_in,
                        user_name: req.session.user_name,
                }); 
        }catch(err){
                res.status(500).json(err);
        } 
});

router.get('/searchpage/:id', withAuth, async (req, res) => { // search page

        try {
                const searchText = req.params.id; // what the user searches for

                res.render('searchpage', {
                        logged_in: req.session.logged_in,
                        user_name: req.session.user_name,
                        searchText
                }); 

        } catch(err){
                res.status(500).json(err);
        }  
});

router.get('/singlebook/:id', withAuth, async (req, res) => { // single book page
        try {
                const isbn =  req.params.id; // isbn for the single book page

                const reviewData = await Reviews.findAll({ 
                        where: { 
                                book_isbn: isbn,
                        },
                        include: [{ // Include user associated with that review
                                model: User,
                                attributes: ['name'],
                        }],  
                });


                const reviews = reviewData.map((review) => review.get({ plain: true}));

                res.render('singlebook', {
                        logged_in: req.session.logged_in,
                        isbn,
                        reviews,
                        user_name: req.session.user_name,
                }); 

        } catch (err) {
                res.status(500).json(err);
        }
});

router.get('/reviewpage/:id', withAuth, async (req, res) => { // review page route

        try {
                const isbn =  req.params.id; // isbn for the single book page

                res.render('reviewpage', {
                        logged_in: req.session.logged_in,
                        user_name: req.session.user_name,
                        isbn  // we use this for database
                });

        } catch (err) {
                res.status(500).json(err);
        }
});

module.exports = router;
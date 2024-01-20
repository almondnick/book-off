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

router.get('/singlebook/:id', async (req, res) => {
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
                        reviews
                }); 

        } catch (err) {
          res.status(500).json(err);
        }

    });




module.exports = router;
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Reviews, Comments, Books } = require('../models');


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

                const singlebookData = await Books.findAll({
                        where: { // WHERE blog_id == blog.id (from the first model)
                                book_isbn: isbn
                        },
                });


               const singlebook = JSON.parse(JSON.stringify(singlebookData)); // For some reasong .get wouldn't work so we had to make it an object to get id
                //console.log(singlebook[0].id);

                const reviewData = await Reviews.findAll({ 
                        where: { 
                                book_id: singlebook[0].id,
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
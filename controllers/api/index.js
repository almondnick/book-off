const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/comments', reviewRoutes);

module.exports = router;
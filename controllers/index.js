const router = require('express').Router();

// const apiRoutes = require('./api'); Nothing in api folder yet
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes); Nothing in api folder yet

module.exports = router;
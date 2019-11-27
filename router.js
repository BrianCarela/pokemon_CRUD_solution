// express comes with the ability to redirect a user based on the URL, that's what this setup is
const router = require('express').Router();

// This route is for changing the database in any way
router.use('/api', require('./controllers/api'));
// This route is simply for bringing views to the user
router.use('/pokemon', require('./controllers/pokemon'));
// handles a request to localhost:8000/
router.get('/', (req, res) => res.render('index'));



module.exports = router;

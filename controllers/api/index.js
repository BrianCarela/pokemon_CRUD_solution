const router = require('express').Router();

const controller = require('./controller');

// whenever someone POSTs to localhost:8000/api/pokemon, we're using this controller method
// localhost:8000/api/pokemon
router.post('/pokemon', controller.create);

// localhost:8000/api/pokemon/:id
router.put('/pokemon/:id', controller.update);

// Same URL as above, but the method stated in fetch (put vs delete) decides which controller method to use
// localhost:8000/api/pokemon/:id
router.delete('/pokemon/:id', controller.delete);

module.exports = router;

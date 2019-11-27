// this file is to decide what to do when someone reaches localhost:8000/pokemon
const router = require('express').Router();
const controller = require('./controller');

// router.get('extention after localhost:8000/pokemon', the_controller_method_that_matches)
// localhost:8000/pokemon/
router.get('/', controller.index);
// localhost:8000/pokemon/new
router.get('/new', controller.new);
// localhost8000:/pokemon/:id/update
router.get('/:id/update', controller.update);
// localhost:8000/pokemon/:id or localhost:8000/pokemon/1
router.get('/:id', controller.show);

// the order that place your routes in is called RESTFUL routing
// Any URLs that include a variable (such as :id) should be placed towards the bottom of this page. This is because we don't want other extensions (such as /new) to be misinterpreted as a URL variable
// in cases where you have an extension AFTER a variable (such as '/:id/update'), it should be placed above the URL that ends at the variable. This is so the URL isn't being stopped short, and doesn't do an incorrect controller action

module.exports = router;

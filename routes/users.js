let express = require ('express');
let router = express.Router();
let usersController = require('../controllers/usersController.js');
let usersMiddleware = require('../middlewares/usersMiddleware.js');

router.get('/', usersController.view);
router.post('/', usersMiddleware, usersController.upload);

module.exports = router;
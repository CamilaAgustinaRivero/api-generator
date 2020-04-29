let express = require ('express');
let router = express.Router()
let productsController = require('../controllers/productsController.js');
let productsMiddleware = require('../middlewares/productsMiddleware.js');

router.get('/', productsController.view);
router.post('/', productsMiddleware, productsController.upload);

module.exports = router;
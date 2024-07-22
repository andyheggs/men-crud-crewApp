const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/authMiddleware');
const platformController = require('../controllers/platformController');

router.post('/', ensureAuthenticated, platformController.createPlatform);
router.put('/:id', ensureAuthenticated, platformController.updatePlatform);
router.delete('/:id', ensureAuthenticated, platformController.deletePlatform);

module.exports = router;

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/authMiddleware');
const agencyController = require('../controllers/agencyController');

router.post('/', ensureAuthenticated, agencyController.createAgency);
router.put('/:id', ensureAuthenticated, agencyController.updateAgency);
router.delete('/:id', ensureAuthenticated, agencyController.deleteAgency);

module.exports = router;

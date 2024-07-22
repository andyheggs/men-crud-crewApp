const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/authMiddleware');
const jobController = require('../controllers/jobController');

router.post('/', ensureAuthenticated, jobController.createJob);
router.put('/:id', ensureAuthenticated, jobController.updateJob);
router.delete('/:id', ensureAuthenticated, jobController.deleteJob);

module.exports = router;

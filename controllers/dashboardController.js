const Agency = require('../models/agencyModel');
const Platform = require('../models/platformModel');
const Job = require('../models/jobModel');

exports.getDashboard = async (req, res) => {
  try {
    const agencies = await Agency.find({ user: req.user._id });
    const platforms = await Platform.find({ user: req.user._id });
    const jobs = await Job.find({ user: req.user._id }).populate('agency platform');
    res.render('dashboard', { agencies, platforms, jobs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const Job = require('../models/jobModel');

exports.createJob = async (req, res) => {
  try {
    const newJob = new Job({ ...req.body, user: req.user._id });
    await newJob.save();
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error creating job');
  }
};

exports.updateJob = async (req, res) => {
  try {
    await Job.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error updating job');
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error deleting job');
  }
};

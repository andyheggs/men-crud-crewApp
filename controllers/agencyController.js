const Agency = require('../models/agencyModel');

exports.createAgency = async (req, res) => {
  try {
    const newAgency = new Agency({ ...req.body, user: req.user._id });
    await newAgency.save();
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error creating agency');
  }
};

exports.updateAgency = async (req, res) => {
  try {
    await Agency.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error updating agency');
  }
};

exports.deleteAgency = async (req, res) => {
  try {
    await Agency.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error deleting agency');
  }
};

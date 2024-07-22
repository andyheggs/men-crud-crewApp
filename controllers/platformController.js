const Platform = require('../models/platformModel');

exports.createPlatform = async (req, res) => {
  try {
    const newPlatform = new Platform({ ...req.body, user: req.user._id });
    await newPlatform.save();
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error creating platform');
  }
};

exports.updatePlatform = async (req, res) => {
  try {
    await Platform.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error updating platform');
  }
};

exports.deletePlatform = async (req, res) => {
  try {
    await Platform.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send('Error deleting platform');
  }
};

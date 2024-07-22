const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).render('login', { error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).render('login', { error: 'Invalid email or password' });
    }

    req.session.user = user;
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getRegister = (req, res) => {
  res.render('register');
};

exports.postRegister = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  if (password !== password2) {
    return res.status(400).render('register', { error: 'Passwords do not match' });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).render('register', { error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.redirect('/auth/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.redirect('/auth/login');
  });
};

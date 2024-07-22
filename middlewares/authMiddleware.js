exports.ensureAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect('/auth/login');
};

exports.forwardAuthenticated = (req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  res.redirect('/dashboard');
};


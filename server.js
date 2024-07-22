const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const path = require('path');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

// EJS
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Method Override
app.use(methodOverride('_method'));

// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Global variables
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/dashboard', require('./routes/dashboardRoutes'));
app.use('/agencies', require('./routes/agencyRoutes'));
app.use('/platforms', require('./routes/platformRoutes'));
app.use('/jobs', require('./routes/jobRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

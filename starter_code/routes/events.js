const express = require('express');
const Event = require('../models/Event');
const ensureLogin = require("connect-ensure-login");

const router  = express.Router();

router.get('/events', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Event.find({}, (err, events) => {
    if (err) { return next(err); }

    res.render('events/index', {
      user: req.user,
      events: events
    });
  });
});



router.get('/new', (req, res, next) => {
  res.render('products/new');
});

module.exports = router;

const express = require('express');
const Event = require('../models/Event');

const router  = express.Router();

router.get('/', (req, res, next) => {
  Event.find({}, (err, events) => {
    if (err) { return next(err); }

    res.render('events/index', {
      events: events
    });
  });
});

module.exports = router;

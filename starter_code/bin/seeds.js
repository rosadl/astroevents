const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Astroevent');
const Event = require('../models/Event');

const events = [{
    name: 'Eclipse solar total',
    place: 'Madrid',
    date: '21 de agosto 2017',
    imageUrl: 'https://o.aolcdn.com/images/dims3/GLOB/crop/1024x513+0+80/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F92ff76caeb89cf233942a6f0d1508637%2F205415439%2Feclipse-solar-getty.jpg',
    description: 'El eclipse solar total del próximo 21 de agosto tiene revolucionados a todos los fans de la astronomía. Un fenómeno de estas características no ocurre todos los días y es la mejor ocasión para disfrutar de uno de los más grandes espectáculos que ofrecen los astros. El último eclipse total se dio en España en 2015 y habrá que esperar hasta 2026 para presenciar otro completamente visible desde nuestro país.',
  },
];

Event.create(events, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((event) => {
    console.log(event.name);
  });
  mongoose.connection.close();
});

const express = require('express');
const helmet = require('helmet');
const { schedule } = require('./schedule.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.disable('x-powered-by');
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200).send({
    error: false,
    status: 200,
    itemCount: 3,
    payload: JSON.stringify(schedule)
  });
});

app.listen(PORT, () => {
  console.log(`cruzhacks-organizer-challenge listening on port ${PORT}`);
});

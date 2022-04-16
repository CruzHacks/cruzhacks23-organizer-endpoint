const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { schedule } = require('./schedule.js');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 8000;

app.disable('x-powered-by');
app.use(helmet());
app.use(cors({
  origin: '*'
  }))
;

const getRequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.get('/api/schedule', getRequestLimiter, (req, res) => {
  res.status(200).send({
    statusCode: 200,
    message: 'OK',
    count: 3,
    payload: schedule
  });
});

app.listen(PORT, () => {
  console.log(`cruzhacks-organizer-challenge listening on port ${PORT}`);
});

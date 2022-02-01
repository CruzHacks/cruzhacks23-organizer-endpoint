const express = require('express');
const helmet = require ('helmet');

const app = express();
const PORT = process.env.PORT || 5000;

app.disable('x-powered-by');
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200).send({
    error: false,
    status: 200,
    message: "hello there!"
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

/* Needs to be agreeable for both my localhost and the machine hosting my app */
const port = process.env.PORT || 8000;

const app = express();

app.use(express.static('client/build'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/say-hi', (req, res) => {
  res.json(`Hello ${req.query.name}, how are you?`);
});

app.use((req, res) => {
  res.json("My server is live!");
});

app.listen(port, () => {
  console.log(`* Server listening on ${port} *`);
})
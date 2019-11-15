require('newrelic');
const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));

app.use(express.static('public/lib'));
app.use(proxy('/products', {target: 'http://ip-172-31-30-21.us-east-2.compute.internal:3002/'}));
app.get('/loaderio-3246666d6c4e7b6899899354c7bee767', (req, res) => {
  res.send('loaderio-3246666d6c4e7b6899899354c7bee767');
});
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});

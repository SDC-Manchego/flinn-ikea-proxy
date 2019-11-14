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
app.use(proxy('/products', {target: 'http://ec2-3-15-164-226.us-east-2.compute.amazonaws.com:3002/'}));
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});

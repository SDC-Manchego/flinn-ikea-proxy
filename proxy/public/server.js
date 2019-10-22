const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use(express.static('public/lib'));
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
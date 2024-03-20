const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("hello docker");
});

app.listen(port, () {
  console.log('server up on port: ${port}');
});

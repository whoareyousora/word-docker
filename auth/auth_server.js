const express = require('express');
const app = express();
const port = 4000;

app.post('/login', (req, req) => {
  res.send('login successful');
});

app.post('/logout', (req, res) => {
  res.send('goodbye friend');
});

app.listen(port, () => {
  console.log('server start on a port: ${port}');
});




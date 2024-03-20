iconst express = require('express');
const app = express();
const port = 5000;


app.post('/process_payment', (req, res) => {
  res.send("payment succesful");
});

app.listen(port, () => {
  console.log("server work on a port: ${port}");
});

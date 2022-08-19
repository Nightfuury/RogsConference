const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(`${__dirname}`)));

app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(`${__dirname}/index.html`));
});

app.listen(7953)
  .on('error', error => {
    console.log(error);
  })
  .on('listening', () => {
    console.log(`listening on port ${port}`);
  });
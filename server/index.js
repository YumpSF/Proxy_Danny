const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 1337;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



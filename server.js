const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.json());

let goods=[];



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
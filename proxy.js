const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = 8000;

app.use(express.static(path.join(__dirname + '/public')));

app.listen(port, () => {console.log(`Server is listening at http://localhost:${port}`)});


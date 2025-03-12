const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const routter = require('./router');
app.use("", routter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

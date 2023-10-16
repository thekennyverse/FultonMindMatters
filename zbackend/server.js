// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000; 
app.use(cors());
app.use(bodyParser.json());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

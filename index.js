const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL)
 .then(console.log('connected successfully !!!'))
 .catch((err) => console.log('erreur mongo', err));
 
  

app.listen(port, ( ) => {
    console.log( `server is running on ${port}`);
}) 
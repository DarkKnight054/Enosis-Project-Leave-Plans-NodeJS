const express = require('express');
const { testDbConnection } = require('./config/db');
require('dotenv').config();



//Application Configuration
const app = express();
testDbConnection();
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://selim_23:Paranoya_23@cluster0.rol6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true ,useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
//jobs
const jobsRouter = require('./routes/jobs');

app.use('/jobs',jobsRouter);

//diplomas

const diplomasRouter = require('./routes/diplomas');
app.use('/diplomas', diplomasRouter);

app.listen(port, () => {
    console.log('server is running')
})
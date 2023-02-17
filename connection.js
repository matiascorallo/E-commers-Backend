require('dotenv').config();

const mongoose = require('mongoose');


const connectionStr =`mongodb+srv://matiascorallo:46517234Maty@cluster0.bbigojd.mongodb.net/test`;

mongoose.set('strictQuery', true);


mongoose.connect(connectionStr)
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
})
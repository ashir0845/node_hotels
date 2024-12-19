const mongoose=require('mongoose');
require('dotenv').config();
// const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL;
mongoose.connect(mongoURL,{ 
   
    useUnifiedTopology: true
});
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to database');
});
db.on('error',(err)=>{
    console.log('error connecting to database:',err);
});
db.on('disconnected',()=>{
    console.log('disconnected from database');
});

module.exports=db;
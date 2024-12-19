const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL,{ 
    useNewUrlParser: true, 
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
import config from './config/config.js' 
import app from './server/express.js'
import mongoose from 'mongoose' 
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { 
    //useNewUrlParser: true,
//useCreateIndex: true, 
//useUnifiedTopology: true
 } )
.then(() => {
    console.log("MongoDB connected");
    })
    
mongoose.connection.on('error', () => {
throw new Error(`Unable to connect to database: ${config.mongoUri}`) 
})
app.get("/", (req, res) => {
res.json({ message: "Welcome to the e-commerce of group 2" });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server is running on http://localhost:%s.', config.port) 
})

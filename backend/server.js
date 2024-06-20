const express = require ('express');

const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000


const {errorHandler} = require('./middlewares/errorMiddleware')
const connectDB = require('./config/dbconfig');

const cors = require('cors')

const path = require('path')

const _dirname = path.dirname("")
const buildpath = path.join(_dirname,"../frontend/build")

connectDB()
const app = express();

app.use(express.json()) //Body Parser
app.use(express.urlencoded({extended:false})) //urlEncoded
app.use(cors({
    origin:"*"
})) //Cross-Orgin Access

//Static Files

app.use(express.static(buildpath))

app.use('/api/database',require('./routes/contactRoutes'));
app.use('/api/volunteer',require('./routes/volunteerRoutes'));

app.get('*',function(req,res){
    res.sendFile(path.join(_dirname,'../frontend/build/index.html'))
})

app.use(errorHandler);//Overides default ErrorHandler
app.listen(port,()=> console.log(`App up and running on ${port}`))
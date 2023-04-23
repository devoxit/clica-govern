const app = require('./app/main')
const connectDB = require('./db/config')
const port = process.env.PORT ||8000
require('dotenv').config()

const opt = {
	useUnifiedTopology : true,
	useNewUrlParser : true
}
// app.listen(port,()=>{
//     console.log("server listening at port:", port)
// })
//DBconnecting
const start = async () => {
    try{
await connectDB(process.env.MONGO_URL,opt)
app.listen(port,()=>{
    console.log("server listening at port:", port)
})
    }catch(err) {
        console.log(err)
    }
}
start();
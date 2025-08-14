import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { ClerkWebhooks } from './controllers/webhooks.js'
//initialize express
const app=express()

//connect to database
await connectDB()

//Middlewares
app.use(cors())

//Routes
app.get('/',(req,res)=> res.send("API working") )

app.post('/clerk' , express.json(), ClerkWebhooks)

//port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


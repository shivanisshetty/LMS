import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//initialize express
const app=express()

//Middlewares
app.use(cors())
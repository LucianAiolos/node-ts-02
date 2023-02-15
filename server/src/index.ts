// const express = require('express')

// this is how you import libraries now!!!
import express from 'express'
import cors from 'cors'
import * as path from 'path'
import colors from 'colors'
// require('dotenv').config()
import * as dotenv from 'dotenv'
import AuthRoutes from '../routes/authRoutes'
dotenv.config()
const PORT = process.env.PORT

const app = express()
// const allowedOrigins = ['http://localhost:3000']
app.use(cors)
app.use(express.json())

app.use('/auth', authRoutes)

app.listen(PORT, ()=> {
  console.log("listening on ", PORT)
})
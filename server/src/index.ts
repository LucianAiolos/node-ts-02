// const express = require('express')

// this is how you import libraries now!!!
import express from 'express'
import cors from 'cors'
import * as path from 'path'
require('dotenv').config()


const app = express()

app.get("/test", (req, res) => {
  res.send('hello from server')
})

const PORT = process.env.PORT
// const allowedOrigins = ['http://localhost:3000']

// app.use(cors)

app.listen(PORT, ()=> {
  console.log("listening on ", PORT)
})
// import express from 'express'
const express = require('express')
const router = express.Router()

// const {
//   registerUser,
// } = require()

router.get('/testRoute', (req, res) => {
  res.send('router working')
})
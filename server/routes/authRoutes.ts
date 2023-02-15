// import express from 'express'
// const express = require('express')
import { Router } from "express"
const router: Router = Router()
// import * as authController from '../controllers/authController'

// const {
//   registerUser,
// } = require()

router.get('/testRoute', (req, res) => {
  res.send('router working')
})



export default router
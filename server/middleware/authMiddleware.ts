import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User'
//import model

const protect = asyncHandler(async (req, res, next) => {
  let token

  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bear')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // Get user from token
      req.user = await User.findById(decoded.id).select('-password')
    }
  }
})
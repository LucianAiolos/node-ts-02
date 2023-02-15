import mongoose, { Schema } from 'mongoose'
import { UserInterface } from '../types/userIterface'

const UserSchema: Schema = new Schema (
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      // send email to confirm
    },
    profilePic:{
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model<UserInterface>("User", UserSchema)

export default User
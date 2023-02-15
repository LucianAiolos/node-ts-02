import { Document } from 'mongoose'

export interface UserInterface extends Document {
  username: String
  email: String
  password: String
  profilePic: String
}


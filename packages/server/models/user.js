import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  passwd: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    length: 11,
  },
});

userSchema.pre('save', async function (next) {
  try {
    this.passwd = await bcrypt.hash(this.passwd, 10);
    next(); 
  } catch (error) {
    next(error); 
  }
})

const User = mongoose.model("user", userSchema);

export default User;

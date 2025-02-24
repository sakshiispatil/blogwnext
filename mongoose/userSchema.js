// This is our Mongoose schema file,
// learn more about it in the docs: https://mongoosejs.com/docs/guide.html

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  avatar: { type: String, default: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1683686792/default/profile.jpg" },
  bio: { type: String, default: "" },
  site: { type: String, default: "" },
  followerIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followingIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  tagId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// ... Define other models (Post, SavedPost, Comment, Reply, Tag) similarly ...

const User = mongoose.model('User', userSchema);
// ... Export models as needed ...

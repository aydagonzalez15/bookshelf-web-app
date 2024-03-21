const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,

    favBooks: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }],
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema)

  



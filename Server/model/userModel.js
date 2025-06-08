let userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: Number,
      require: true,
      trim: true,
    },
    address: {
      type: String,
      require: true,
    },
    otp: {
      type: Number,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(User, "userSchema");

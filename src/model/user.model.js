const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //admin: { type: String, required: true },
});

UserSchema.index({ username: 1 }, { unique: true }); // Esta línea es opcional, Mongoose debería crear el índice automáticamente

const User = mongoose.model("Usuario", UserSchema);

User.ensureIndexes(); // Asegura que los índices se han creado

module.exports = User;

// const mongoose = require("mongoose");

// const User = mongoose.model("Usuario", {
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   //admin: { type: String, required: true },
// });

// module.exports = User;

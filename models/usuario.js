const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
   name: { type: String, required: [true, "Name is required"] },
   email: { type: String, required: [true, "Email is required"], unique: true },
   password: { type: String, required: [true, "Password is required"] },
   img: { type: String },
   rol: { type: String, required: true, emun: ["ADMIN_ROLE", "USER_ROL"] },
   state: { type: Boolean, default: true },
   google: { type: Boolean, default: false },
});

usuarioSchema.methods.toJSON = function () {
   const { __v, password, ...user } = this.toObject()
   return user
};

module.exports = model("User", usuarioSchema);

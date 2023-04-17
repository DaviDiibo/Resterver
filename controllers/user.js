const { response: resp, request: requ } = require("express");
const bcrypjs = require("bcryptjs");
const User = require("../models/usuario");

const newUser = async (req = requ, res = resp) => {
   const { name, email, password, rol } = req.body;
   const user = new User({ name, email, password, rol });

   // verificar que el correo exista
   const existEmail = await User.findOne({ email });
   if (existEmail)
      return res.status(400).json({ msg: "corre ya esta registrado" });

   // encriptar la contraseña
   const salt = bcrypjs.genSaltSync();
   user.password = bcrypjs.hashSync(password, salt);

   // guardar datos en DB
   const resp = await user.save();
   res.json({
      ok: true,
      msg: resp,
   });
};

const updateUser = async (req = requ, res = resp) => {
   const { id } = req.params;
   const { password, google, email, ...body } = req.body;

   // Valida contra base de datos
   if (password) {
      const salt = bcrypjs.genSaltSync();
      body.password = bcrypjs.hashSync(password, salt);
   }

   const user = await User.findByIdAndUpdate(id, body);

   res.status(400).json({ msg: user });
};

module.exports = {
   newUser,
   updateUser,
};

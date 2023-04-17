const Role = require("../models/Role");
const User = require("../models/usuario");

const isRoleValid = async (role = "") => {
   const isExist = await Role.findOne({ role });
   if (!isExist) {
      throw new Error(`Role do not is valid : ${role}`);
   }
};

const isEmailExist = async (email = "") => {
   const existEmail = await User.findOne({ email });
   if (existEmail) throw new Error("Email existing");
};

const isExistID = async (id) => {
   const existID = await User.findOne({ _id: id });
   if (!existID) throw new Error("ID is not existing");
};

module.exports = {
   isRoleValid,
   isEmailExist,
   isExistID,
};

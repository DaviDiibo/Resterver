const mongoose = require("mongoose");

const dbconection = async () => {
   try {
      await mongoose.connect(process.env.DBCNN, {
         useNewUrlParser: true,
      });
      console.log('Base de datos conectada')
   } catch (e) {
      console.error(e);
      throw new Error("Error en la coneccion de la base de datos");
   }
};

module.exports = {
   dbconection,
};

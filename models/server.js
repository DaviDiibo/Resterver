const express = require("express");
const cors = require("cors");
const { dbconection } = require("../database/config");

class Server {
   constructor() {
      this.app = express();
      this.port = process.env.PORT;
      this.pathsUsers = "/api/users";

      // conexion a la base de datos mongo
      this.ConectionDB();
      //   Middlewares
      this.Middlewares();
      // Rutas de mi aplicacion
      this.Routes();
   }
   async ConectionDB() {
      await dbconection();
   }

   Middlewares() {
      // CORS
      this.app.use(cors());
      // directorio publico
      this.app.use(express.json());

      this.app.use(express.static("public"));
   }

   Routes() {
      this.app.use(this.pathsUsers, require("../routes/user"));
   }

   Listen() {
      this.app.listen(this.port, () => {
         console.log(`Escuchando el puerto: ${this.port}`);
      });
   }
}

module.exports = Server;

const express = require("express");
const cors = require("cors");

class Server {
   constructor() {
      this.app = express();
      this.port = process.env.PORT;
      this.pathsUsers = '/api/users'

      //   Middlewares
      this.Middlewares();
      // Rutas de mi aplicacion
      this.Routes();
   }

   Middlewares() {
      // CORS
      this.app.use(cors());
      // directorio publico
      this.app.use(express.json())
      
      this.app.use(express.static("public"));
   }

   Routes() {
      this.app.use(this.pathsUsers,require('../routes/user'))
   }

   Listen() {
      this.app.listen(this.port, () => {
         console.log(`Escuchando el puerto: ${this.port}`);
      });
   }
}

module.exports = Server;

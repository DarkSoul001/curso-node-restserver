const express = require('express')
const cors = require('cors')
const app = express()


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        // Middlewares
        this.middlewares()
        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        // cors
        this.app.use(cors())
        // lectura parsed del body
        this.app.use(express.json())
        
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }
    start() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port)
        })
    }
}

module.exports = Server;
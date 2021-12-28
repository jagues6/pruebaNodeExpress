//estamos creando la variable o instancia del servidor
import {} from "dotenv/config.js"

//con esta linea traemos todas las librerias de express
import express from 'express'

//importamos libreria cors
import cors from "cors"
import dbConnection from "../database/config.js";

class Server{

    constructor(){
        //crear el servidor
        this.app = express();
        //variable global del puerto a usar
        this.port=process.env.PORT
        
        //conectar a la base de datos
        this.conectar()
        //poner los middlewares
        this.middlewares()
        //rutas o routes
    }

    async conectar(){
        await dbConnection()
    }

    routes(){

    }

    middlewares(){
        //vamos a decirle al servidor que acepte formato JSON
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(express.static("Frontend"))
    }

    listener(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }
}

export {Server}





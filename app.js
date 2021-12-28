//estamos creando la variable o instancia del servidor
import {} from "dotenv/config.js"
import {Server} from './model/server.js'

const server = new Server();

console.log(server.listener()); 
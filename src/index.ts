import "reflect-metadata";
import app from "./server";
import { AppDataSource } from './db'

//* Arrancar el proyecto
async function main() {

  try {
    //*base de datos
    await AppDataSource.initialize();
    console.log('Database connected')

    //* Puerto de la aplicación
    const PORT = process.env.PORT || 3000
    
    app.listen( PORT, () => {
      console.log( `Server is listening on port ${ PORT }` )
    } )
  } catch (error) {
    console.log( error )
  }

  
}

main();

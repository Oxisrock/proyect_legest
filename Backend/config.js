// donde se guardan las configuraciones de las conexion a la base de datos y el puerto donde se iniciara
module.exports =
{
  port: process.env.PORT || 3000, // constante port para guardar el puerto donde se levantara el servidor
  db: process.env.MONGODB || 'mongodb://127.0.0.1:27017/friender_db' // constante db es para guardar la ruta de la base de datos
  // SECRET_TOKEN: 'miclavedetokens'
}

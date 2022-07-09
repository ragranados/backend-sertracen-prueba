# backend-sertracen-prueba  
- Para correr este proyecto de forma local se necesita NPM, y una instancia local o remota de una base en sql. La base a usar debe estar ya creada y vacia a la hora de crear el proyecto.  
- Configurar la variable de entorno DBURI, del estilo:  
DBURI=mysql://<usuario>:<contraseña>@localhost:3306/<nombre base de datos>  
al correr el proyecto con la base vacía, se creará la tabla.  
- Se recomienda cambiar el puerto (usando la variable de entorno PORT=<numero de puerto>), ya que React corre en el mismo puerto por default.

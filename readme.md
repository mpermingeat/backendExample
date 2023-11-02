# Ejemplo de estructura en Backend

## Distribucion de archivos

![Alt text](/src/assets/img/image.png)

- Por cada entidad de la base de datos creamos una carpeta con el nombre de la entidad dentro de la carpeta modules.

- Se crea un archivo model, controller, routes, service (que puede estar dentro de su propia subcarpeta si la complejidad lo amerita)

- La nomenclatura de los archivos es el nombre de la entidad, seguido de un punto y el tipo rol del archivo, model, controller, service, routes, etc

## 'example'.module.js

- En 'example'.module.js definimos el modelo de la entidad, en este caso un modelo de sequelize - postgres, de un usuario

![Alt text](/src/assets/img/image-1.png)

## 'example'.routes.js

- En 'example'.routes.js definimos las rutas propias de la entidad.

- Separandolas en inputs y outputs para mejor legibilidad, y con nombres intuitivos

![Alt text](/src/assets/img/image-2.png)

## 'example'.controller.js

- En 'example'.controller.js definimos los controladores, que se encargaran de recibir las peticiones y los errores(siempre q sea posible)

- Los controladores debe tener un nombre que identifique el tipo de peticion, y que describa su funcion

- Los controladores no tiene ni debe comunicarse con la base de datos, esa funcion es la de los services,
  los controladores piden el servicio correspondiente y envian la respuesta de la peticion.

- Puede ser servicios especificos de la entidad o servicios globales, o servicios de otras entidades.

![Alt text](/src/assets/img/image-3.png)

## 'example.sevice.js'

- Los services se encargan de la logica y la comunicacion con la base de datos, si el procesado de la informacion es muy complejo pueden requerir helpers o funciones externas, o incluso otros servicios.

- Los nombres deben ser descriptivos

- Todos los servicios de una entidad se exportan como metodos del exampleService como en la imagen de ejemplo

![Alt text](/src/assets/img/image-4.png)

## /Service global-services.js

- Dentro se definiran los servicios globales que no dependan de una entidad en si, y puedan ser reutilizados en cualquier lugar

![Alt text](/src/assets/img/image-5.png)

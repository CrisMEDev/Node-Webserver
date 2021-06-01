# **Webserver con NODE**

Repositorio con código para levantar un webserver




### **Notas**
La **request** es lo que se está solicitando por parte del cliente (cualquier cosa que intente acceder a un recurso del servidor).

La **reponse** es lo que el server responde cuando se procese esa request.

El comando start del package.json le indica a la mayoría de hostings que esperan una aplicación node es el comando que
debe ejecutar para levantar la aplicación.
``` "start": "node index.js" ```

Para levantar la aplicación entonces será:
```
npm start
```

### **Paquetes utilizados**

* Se usó [express](https://www.npmjs.com/package/express) para levantar el server y trabajar de manera más eficiente que con el package http propio de node.
* Se usó [handlebars](https://www.npmjs.com/package/handlebars) para renderizar el sitio web.

### **Documentación oficial**

* [express](http://expressjs.com/)
* [handlebars con express](https://github.com/pillarjs/hbs)

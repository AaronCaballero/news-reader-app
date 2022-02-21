# News-reader App

## Summary
Este proyecto se basa en crear un lector de noticias web. Para ello se emplearán las siguientes tecnologías:
* Node.js + Express
* React
* Mongodb using mongoose
* Bootstrap
Se ha creado mediante el concepto de single page application de React. Para que sea lo más fluido posible.

## Pipeline

### Backend
* Se instala node: `npm i node`
* Se instala nodemon para que se recarge automáticamente el server: `npm i nodemon`
* Se instala cors para poder permitir al front obtener los datos del back: `npm i cors`
* Se instala bodyparser para poder tratar los datos de la respuesta del front: `npm i body-parser`

### Frontend
* Para crear el enterno de react desde cero de forma más fácil y rápida se usa el comando `npx create-react-app .`.
* También se incluye el enrutado mediante el comando `npm i react-router-dom`.
* Se instala Axios para poder enviar parámetros al back `npm install --save axios`.
* Se instala bootstrap `npm install --save bootstrap.`

### LLamadas a BBDD:
* Obtener datos archivados:     `.find({ "archiveDate": { $ne: "" } })`
* Obtener datos no archivados:  `.find({ "archiveDate": "" })`

## Execution
* Inicializar backend: `nodemon server.js`
* Inicializar frontend: `npm start`

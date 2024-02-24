> # ***CRUD con Express, TypeScript, TypeORM y PostgreSQL***

*Este es un proyecto de ejemplo que implementa un CRUD (Create, Read, Update, Delete) utilizando Express.js, TypeScript, TypeORM y PostgreSQL. Este README proporciona una guía rápida para configurar y ejecutar la aplicación.*

1. Instalar TypeScript y demás dependencias
```
npm i -D typescript @types/node ts-node-dev rimraf
```
2. Inicializar el archivo de configuración de TypeScript
```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear scripts para dev, build y start 
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

> ## ***Recordatorio***
1. Crear la carpteta src
2. Dentro de src crear el archivo app.ts
3. Ejecutar dev para iniciar el proyecto
4. recuerden que al trabajar con ts y express deben instalar los types de las dependencias
```
npm i -D @types/express
npm i -D @types/cors
npm i -D @types/morgan
npm i -D @types/node
```

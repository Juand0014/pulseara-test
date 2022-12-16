<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NestJS 

This is a NestJS project with some basic configurations.

## How to configure this project to your needs?

1. Clone this repo
2. Install dependencies

    ```
    yarn install
    ```

3. Install NestJS CLI

    ```
    npm i -g @nestjs/cli
    ```
    
4. Build the docker image

    ```
    docker-compose up --build
    ```

5. Run the docker container

    ```
    docker-compose up -d
    ```

6. Run the project in dev mode
    ```
    yarn start:dev 
    ```
7. If you wanna see the documentation run 
    ```
    yarn doc
    ```
Project running on http://localhost:3000

## EndPoints
### procedures Endpoint

| Endpoint | Method | Description |
| --- | --- | --- |
| /api/procedure | GET | Get all procedures |
| /api/procedure/:id | GET | Get procedure by ID |
| /api/procedure/:id | PATCH | Update procedures by ID |
| api/procedure | POST | add procedures |
| api/procedure/:id | DELETE |remove procedure by ID |

## Stack usado

* MongoDB
* Nest

# Production Build
1. Llenar las variables de entorno de prod
2. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env up --build
```
3. Correr la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env up -d
```

# API MEMORIA DE GESTION
Esta API forma parte del proyecto de memoria de gestion. Esta basada en el framework HONO y replicado para correr el mismo en los servidores locales de DiTella.
La API utiliza NODE como lenguaje y utiliza @hono/node-server para correr sobre node la version del ramework

## Conceptos de uso
Para correr el ambiente local pueden utilizarse
```bash
npm run dev
```
este caso es un comando propio de NODE que lo que hace es levantar un servidor local vinculado al index y permite tambien levantar un entorno local, pero no va a crear ninguno de los servicios (Bindings) vinculados en la nube y NO VA A PODER CONECTAR A LAS BASES DE DATOS DE FORMA LOCAL

Tambien se puede levantar un ambiente local creando una imagen de docker local con el comando:
```bash
docker-compose -f docker-compose-localhost.yaml up -d
```
y pegarle por rutas como una API de la misma forma que las que trabajamos con framework SLIM (PHP). La imagen de docker levanta una base de NODE sobre la cual corre una version dockerizada de HONO.

## Conexion a bbdd
Para cada base de datos que se desee utilizar se debera encontrar un gestor (ORM) para trabajar. En este caso se utiliza DRIZZEL el cual provee usos para MySQL y Postgres

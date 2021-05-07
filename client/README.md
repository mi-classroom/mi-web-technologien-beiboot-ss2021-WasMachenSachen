
# Installation
Voraussetzungen:
- Docker  
- bzw. NodeJS & NPM
  
In [config.js](./src/config.js) kann URL des Servers verändert werden.

## Benutzung Manuell

```bash 
cd ./client
npm install 
npm run dev
```
## Benutzung mit Docker

```bash
cd ./client

# Docker Image aus Dockerfile erstellen:
docker build -t <image-name> . 
# . stellt in diesem Fall das aktuelle Directory dar

#Docker Image starten:
docker run -p <port>:5000 -v <image-name>

```

Der Einstiegspunkt für den Client liegt unter [http://localhost:5000](http://localhost:5000)

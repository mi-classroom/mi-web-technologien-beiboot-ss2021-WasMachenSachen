# Installation
Voraussetzungen:
- Docker  
- bzw. NodeJS & NPM

>Über die `.env`-Datei können individuelle Werte für den Server gesetzt werden. Näheres im [README](server/README.md) für den Server. Dafür kann die Beispieldaten [.example.env](server/example.env) in `.env` umbennant werden. Ohne diese wird auf die Standardparameter zurückgegriffen.

## Benutzung Manuell

```bash 
cd ./server
npm install 
npm run start
```

## Benutzung mit Docker

```bash
cd ./server

# Docker Image aus Dockerfile erstellen:
docker build -t <image-name> . 
# . stellt in diesem Fall das aktuelle Directory dar

#Docker Image starten:
docker run -p <port>:3030 -v <pfad-zum-data-dir>:/data <image-name>

```

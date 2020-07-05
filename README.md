# Session Rattrapage du 05 Juillet 2020

## Programme
1. GIT
2. NODEJS
3. DOCKER


## Docker Mongo
```
docker pull mongo
docker run --name some-mongo -p 27017:27017 -d mongo:latest
```

## Docker Dockerfile
```
docker build -t demo:1.0.0 ./dockerfile/
docker run --name demo -p 80:80 -d demo:1.0.0
```
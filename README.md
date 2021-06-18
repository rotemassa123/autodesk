# autodesk

## 1
live api url: https://autodesk-application.herokuapp.com/

## 2
in order to run the api you need to pass the following env vars:
CONSUMER_KEY
CONSUMER_SECRET
ACCESS_TOKEN
ACCESS_TOKEN_SECRET


## 3
in order to run the api using docker do the following:
1. sudo docker build -t node-app .
2. docker run -it -p 3000:3000 -e CONSUMER_KEY=<your consumer key> -e CONSUMER_SECRET= <your consumer secret> -e ACCESS_TOKEN= <your access token> -e ACCESS_TOKEN_SECRET = <your access token secret> autodesk
3. navigate to http://localhost:3000 and send your http request
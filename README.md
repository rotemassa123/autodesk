# autodesk

## 1
live api url: https://autodesk-application.herokuapp.com/

## 2
in order to run the api you need to pass the following env vars
CONSUMER_KEY
CONSUMER_SECRET
ACCESS_TOKEN
ACCESS_TOKEN_SECRET

In order to get the values for these environment variables please go to http://twitter/api/docs

## 3
in order to run the api using docker do the following:
1. docker pull autodesk
2. docker run -it -p 3000:3000 -e CONSUMER_KEY=*** autodesk
3. navigate to http://localhost:3000
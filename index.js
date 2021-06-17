require('dotenv').config();
const twit = require('twit');
const os = require('os');
const config = require('./config');
const express = require("express");
const Twitter = new twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret,
});

const server = express();

server.get('/health', (req, res) => {
    data = {
        'OS name': os.platform(),
        'Language/platform version': process.version,
        'Memory': process.memoryUsage().heapUsed/(1024 * 1024),
        'CPU': process.cpuUsage().user/(1024 * 1024),
    }
    res.json(data);
});

server.get('/tweets', (req, res) => {
    Twitter.get('search/tweets', { q: JSON.stringify(req.query), count: 10 }, function(err, data, response) {
        if (err) {
            res.status(400).send(`Error: ${err.message}`);
            return;
        }

        let tweets = data.statuses; 
        let result = [];     
        for(let i = 0; i < tweets.length && i < 10; i++){
            result.push(tweets[i].text);
        }
        res.json(result);
    });
}); 

server.listen(config.port, () => console.log(`listening on port: ${config.port}...`));
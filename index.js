const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-839002310577-834169775074-EaLErcYmx2OcNoP9uB1VOqP1',
    name: 'Schedulr'
})

// Start Handler
bot.on('start', null)

// Error Handler
bot.on('error', err => console.log(err));


// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

// Response to Data
function handleMessage(message) {}
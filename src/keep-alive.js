const fetch = require('node-fetch');

console.log('Waking up the bot');
setInterval(() => fetch(`https://otterbot-1.herokuapp.com`), 5 * 60 * 1000);
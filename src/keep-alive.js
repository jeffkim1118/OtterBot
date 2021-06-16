const fetch = require('node-fetch');

setInterval(() => fetch(`https://otterbot-1.herokuapp.com`), 5 * 60 * 1000);
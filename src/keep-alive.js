const fetch = require('node-fetch');

setInterval(async() => {
    await fetch([''])
    console.log('Prevented from sleeping')
}, 5 * 60 * 1000);
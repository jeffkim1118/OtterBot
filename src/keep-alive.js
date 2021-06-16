const fetch = require('node-fetch');

setInterval(async() => {
    await fetch(['https://otterbot-1.herokuapp.com/'])
    console.log('Prevented from sleeping')
}, 5 * 60 * 1000);
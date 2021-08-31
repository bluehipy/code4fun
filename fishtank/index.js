const tmi = require('tmi.js');

const client = new tmi.Client({
	channels: [ 'asmongold' ]
});

client.connect();

client.on('raw_message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
	console.log(channel, tags, message);
});


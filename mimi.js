const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express')

const app = express()

require('dotenv').config()

client.login(process.env.BOT_TOKEN)

client.on('ready',()=>{
    console.log('Connected!');
})

var abuseArray = [
    'an idiot!',
    'a rascal!',
    'a fucking idiot!',
    'a bitch ass!',
    'an asshole!',
    'an ugly motherfucker!'
]

var appreciationArray=[
    'amazing! <3',
    'very beautiful! <3',
    'a lovely girl! <3',
    'very cute! <3',
    'very sweet! <3'
]

client.on('message',(msg)=>{
    if (msg.content.toLowerCase().includes('saronee')||msg.content.toLowerCase().includes('bublee')) {
        index = Math.floor(Math.random()*appreciationArray.length)
        msg.channel.send(`Saronee is ${appreciationArray[index]}!`)
    }

    if (msg.content.toLowerCase().includes('jessica')||msg.content.toLowerCase().includes('jess_ica')) {
        index = Math.floor(Math.random()*abuseArray.length)
        msg.channel.send(`Jessica is ${abuseArray[index]}!`)
    }
})

app.listen(process.env.PORT,()=>{
    console.log('Listening');
})
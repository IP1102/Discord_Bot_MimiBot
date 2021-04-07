const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()

require('dotenv').config()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

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
    if (msg.content.toLowerCase().includes('bublee')||msg.content.toLowerCase().includes('saronee')) {

        index = Math.floor(Math.random()*appreciationArray.length)
        msg.channel.send(`Saro is ${appreciationArray[index]}!`)
        axios.get(`https://g.tenor.com/v1/search?q=love&key=${process.env.TRENOR_API}&limit=20`)
        .then(resp=>{
            indexGif = Math.floor(Math.random()*resp.data.results.length)
            msg.channel.send(resp.data.results[indexGif].url);
        })


    }

    if (msg.content.toLowerCase().includes('jess_ica')||msg.content.toLowerCase().includes('jessica')) {

        index = Math.floor(Math.random()*abuseArray.length)
        msg.channel.send(`Jess is ${abuseArray[index]}!`)

        axios.get(`https://g.tenor.com/v1/search?q=hate&key=${process.env.TRENOR_API}&limit=20`)
        .then(resp=>{
            indexGif = Math.floor(Math.random()*resp.data.results.length)
            msg.channel.send(resp.data.results[indexGif].url);
        })
    }
})

app.listen(process.env.PORT,()=>{
    console.log('Listening');
})
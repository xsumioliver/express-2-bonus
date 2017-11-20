function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

var rocks = [
    {"user":"rock","ai":"rock","result":"tie"},
    {"user":"rock","ai":"paper","result":"lose"},
    {"user":"rock","ai":"scissors","result":"win"}
  ]

var papers =[
    {"user":"paper","ai":"rock","result":"win"},
    {"user":"paper","ai":"paper","result":"tie"},
    {"user":"paper","ai":"scissors","result":"lose"}
]  

var scissorss =[
{"user":"scissors","ai":"rock","result":"lose"},
{"user":"scissors","ai":"paper","result":"win"},
{"user":"scissors","ai":"scissors","result":"tie"}
]

const express = require('express') // import express
const app = express() // create an express server
const morgan = require('morgan')
const port = 3000; // we will use this later

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('<h1>Rock, Paper, Scissors, Shoot!</h1> <a href ="rock">Rock</a> <a href ="scissors">Scissors</a> <a href ="paper">Paper</a>')
  })
  
app.get('/rock', (req, res) => {
    res.send(shuffle(rocks), '<a href ="/">home</a>')
  }) 

app.get('/paper', (req, res) => {
    res.send(shuffle(papers), ' <a href ="/">home</a>')
  }) 

app.get('/scissors', (req, res) => {
    res.send(shuffle(scissorss), ' <a href ="/">home</a>')
  }) 

  app.get('*', (req, res) => {
    res.redirect('/')
  })
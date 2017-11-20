const morgan = require('morgan')
const express = require('express')
const port = 8000;
const app = express()

app.use(morgan('dev'))

const suits = ["Clubs", "Diamonds", "Hears", "Spades"]
const types = [ 2, 3, 4, 5, 6, 7, 8, 9, 10,
"J", "Q", "K","A",]
let deck = []

const suffle = () => {
    suits.forEach((st) => {
        types.forEach((tp) => {
            deck = deck.concat({
                suit: st,
                type: tp
            })
        })
    })
    return deck
}

app.get("/draw/:num", (req, res) => {
    if (Number(req.params.num) > 10) {
        res.status(404);
        res.send("maximum draw is 10")
    }
   

let shuffled = shuffle();
let response = {};

for(var i = 0; i < req.params.num; i++){
    var sampleInd = Math.floor(Math.random()* shuffled.length);
    response[i] = shuffled[sampleInd];
    shuffled.splice(sampleInd, 1);
}

res.send(JSON.stringify(response))

});

app.get("*", (req, res) => {
    res.status(404);
    res.send("please use /draw/:number");
} )

app.listen(port, () => {
    console.log(`Cards app listening on port ${port} `)
}) 

const morgan = require('morgan')
const express = require('express')
const port = 8000;


const app = express()

app.use(morgan('dev'))

app.get('/:num/:base', (req, res) => {
    if (![Number].includes(req.params.num)){
        res.status(404)
        res.send("please use a number")
      }

      if (!["hex", "bin", "dec"].includes(req.params.base)){
        res.status(404)
        res.send("please use hex, bin or dec")
      }
      const num = Number(req.params.num)
      
})
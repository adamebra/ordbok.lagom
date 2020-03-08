const express = require('express')
const crawler = require('./lagom.crawler.js')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    crawler.find(req.query.word, req.query.l)
    .then((response)=>{
        res.send(response)
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


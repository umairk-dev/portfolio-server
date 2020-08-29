const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const projectRouter = require('./routes/project-router')

const app = express()
const apiPort = 4000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use('/static', express.static('assets'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api',projectRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
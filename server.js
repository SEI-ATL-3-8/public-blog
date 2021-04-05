const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rowdy = require('rowdy-logger')
const cors = require('cors')
const routesReport = rowdy.begin(app)
app.use(express.json())
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`)
routesReport.print()
})

const postRoutes = require('./routes/postRoutes')
app.use(cors())
app.get('/', (req,res) => {
    res.send('hello')
})

app.use('/posts', postRoutes)
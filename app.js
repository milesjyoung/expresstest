const express = require('express')
const app = express()


app.use(express.json())


app.get('/', (req, res) => {
    res.send('<div><h1>Hello world</h1></div>')
})

app.get('/products', (req, res) => {
    res.send('<div><h1>All Products</h1></div>')
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    res.send(`<div><h1>Product: ${id}</h1></div>`)
})







const PORT = 3000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
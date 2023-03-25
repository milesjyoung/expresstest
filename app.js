const express = require('express')
const app = express()
const cors = require('cors')

const products = {
    product1: {
        id: 1,
        value: 'apple'
    },
    product2: {
        id: 2,
        value: 'bannana'
    },
    product3: {
        id: 3,
        value: 'salt'
    },
    product4: {
        id: 4,
        value: 'yogurt'
    }
}

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json({greeting: 'hello world', type: 'I\'m an express response'})
})

app.get('/products', (req, res) => {
    res.json({product1: products.product1, product2: products.product2, product3: products.product3, product4: products.product4})
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const item = Object.keys(products).map(key => products[key]).find(product => product.id===id)
    if(1<2) {
        res.json({item: products.product1})
    } else {
        res.status(404).send('not found')
    }
    
})







const PORT = 3005

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
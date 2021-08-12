const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.use(bodyParser.json())
app.listen(3000, () => {
    console.log('server is running on port 3000!');
});
app.use(express.static('static'));
app.get('.', (req, res) => {
    fs.readFile('/static/index.html', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/catalog', (req, res) => {
    fs.readFile('Api/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});
// app.post('/addToCart', (req, res) => {
//     fs.readFile('/Api/cart.json', 'utf8', (err, data) => {
//         const cart = JSON.parse(data);
//         const item = req.body;
//     });
// });
app.get('/cart', (req, res) => {
    fs.readFile('./Api/cart.json', 'utf8', (err, data) => {
        res.send(data);
        console.log(data);
    });
})

app.post('/addToCart', (req, res) => {
    fs.readFile('./Api/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);

        console.log(req.body)
        cart.push(req.body)

        fs.writeFile('./Api/cart.json', JSON.stringify(cart), () => {
            console.log(cart);
            res.end();
        })
    });
})

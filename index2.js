var express = require('express')
var app = express()

var port = process.env['PORT'] || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.get('/exp', function(req, res) {
    res.json({})
})

app.get('/random', function(req, res) {
    var min = Math.ceil(req.query.min);
    var max = Math.floor(req.query.max);
    var random = Math.floor(Math.random() * (max - min)) + min;

    res.json({
        "min": min,
        "max": max,
        "random": random
    })
})

var country = {
    "US": {
        "INDIA": 68
    }
}

var currency = {
    "US": "USD",
    "INDIA": "INR"
}
app.get('/currency', function(req, res) {
    var amount = req.query.amount;
    var from   = req.query.from.toUpperCase();
    var to     = req.query.to.toUpperCase();
    var exchange = amount * country[from][to];

    res.json({
        "amount": amount,
        "exchange": exchange,
        "currency": currency[to]
    })

})


app.listen(port, function () {
    console.log('Example app listening on port -> ' + port);
});
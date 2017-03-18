var movieQuotes = require('./movieQuotes');
var quote = new movieQuotes();
var express = require('express');

var app = express();

app.get('/quotes',function(req,res){
    setTimeout(function(){
    res.writeHead(200);
    res.write(quote.getNewQuote());
    res.end();
    },500);
})

app.listen(8080);
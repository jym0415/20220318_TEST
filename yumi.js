var express = require('express');
var app = express();


app.get('/',(req, res) => {
    res.send('첫번째 페이지셋팅');
})

app.listen(8080,() => {
    console.log('구동완료!')
})
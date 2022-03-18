var express = require('express');
var app = express();

var getsend = require('./routes/getsend')
var postsend = require('./routes/postsend')
var sqlsend = require('./routes/sqlsend')

app.get('/',(req, res) => {
    res.send('첫번째 페이지셋팅');
})

app.use('/get', getsend)
app.use('/post', postsend)
app.use('/sqlt', sqlsend)

app.listen(8080,() => {
    console.log('구동완료!')
})
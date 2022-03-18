var express = require('express')
var mysql = require('mysql');
var dbconfig = require('../db/config.js')
const connection = mysql.createConnection(dbconfig)
router = express.Router()


router.get('/',(req,res) => {
    res.send('get에서옴')
})

router.get('/getjson',(req,res) => {
    res.send({'url': '/getsend/getjson value값'});
})

router.post('/post',(req,res) => {
    res.send({
        'url' : 'getsend/post',
        'title':'getsend.js안의post라우팅'
    })
}) //post는 복잡한 내용을 담음

router.get('/awssql',(req, res) => {
    connection.query('SELECT * FROM reactinterview.interview', (error, rows) => {
        if(error) throw error;
        console.log('해당스키마안의 테이블 내용 : ', rows);
        res.send(rows);
    });
})


module.exports = router;

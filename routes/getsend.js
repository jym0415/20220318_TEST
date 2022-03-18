var express = require('express')
router = express.Router()

var mysql = require('mysql');
var dbconfig = require('../db/config.js')
const connection = mysql.createConnection(dbconfig)

router.get('/',(req,res) => {
    res.send('get에서옴')
})

router.get('/awssql',(req, res) => {
    connection.query('SELECT * FROM reactinterview.interview', (error, rows) => {
        if(error) throw error;
        console.log('해당스키마안의 테이블 내용 : ', rows);
        res.send(rows);
    });
})


module.exports = router;

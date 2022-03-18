var express = require('express')
router = express.Router()

router.get('/',(req,res) => {
    res.send('get에서옴')
})

module.exports = router;
